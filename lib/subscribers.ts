/* Subscriber storage — email-collection amendment (user instruction,
   2026-11-01; extends ARCHITECTURE §4.3/§6: analytics still never stores
   emails — this is a separate, explicit opt-in list).
   Writes happen ONLY here, server-side, through the Admin SDK (Firestore
   rules stay deny-all for clients; the server bypasses them).
   Collection: subscribers/{emailHash} { email, createdAt, source, status }
   - emailHash = sha256 of the normalized (trimmed, lowercased) email, so a
     duplicate signup resolves to the SAME document: idempotent success,
     no duplicates, and the route never has to reveal "already subscribed".
   - Seed/no-Firebase mode (getDb() === null): subscriptions are kept in a
     module-level in-memory map and logged as [subscribe][dev] lines, so the
     whole flow is testable locally. Nothing is persisted in dev mode. */
import "server-only";
import { createHash } from "crypto";
import { getDb } from "./firebase";

export interface Subscriber {
  email: string;
  createdAt: number;
  source: string;
  status: "active";
}

export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

export function emailHash(normalizedEmail: string): string {
  return createHash("sha256").update(normalizedEmail).digest("hex");
}

/** Masked form for logs — never log full addresses beyond local dev need. */
function mask(email: string): string {
  const [local, domain] = email.split("@");
  return `${(local ?? "").slice(0, 2)}***@${domain ?? ""}`;
}

/* ---------------------------- seed-mode memory ----------------------------- */

const devStore = new Map<string, Subscriber>();

/* --------------------------------- writer ---------------------------------- */

/**
 * Store a subscriber. Returns "created" | "duplicate".
 * Duplicates are NOT an error and reveal nothing new to the caller beyond
 * success — the existing doc (and its original createdAt/source) is kept.
 */
export async function addSubscriber(
  email: string,
  source: string
): Promise<"created" | "duplicate"> {
  const normalized = normalizeEmail(email);
  const hash = emailHash(normalized);
  const db = getDb();

  if (!db) {
    if (devStore.has(hash)) {
      console.log(
        `[subscribe][dev] duplicate (not re-stored) ${mask(normalized)} hash=${hash.slice(0, 12)}`
      );
      return "duplicate";
    }
    devStore.set(hash, {
      email: normalized,
      createdAt: Date.now(),
      source,
      status: "active",
    });
    console.log(
      `[subscribe][dev] stored ${mask(normalized)} hash=${hash.slice(0, 12)} source=${source} total=${devStore.size}`
    );
    return "created";
  }

  const ref = db.doc(`subscribers/${hash}`);
  const snap = await ref.get();
  if (snap.exists) return "duplicate";
  const record: Subscriber = {
    email: normalized,
    createdAt: Date.now(),
    source,
    status: "active",
  };
  // create() (not set) so a race between two simultaneous signups with the
  // same email can never overwrite the first record.
  await ref.create(record);
  return "created";
}

/** Dev/test visibility into the in-memory store size (seed mode only). */
export function devSubscriberCount(): number {
  return devStore.size;
}
