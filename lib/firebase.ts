/* Server-only Firebase Admin bootstrap.
   The service account JSON comes from the FIREBASE_SERVICE_ACCOUNT env var
   (ARCHITECTURE §8) — never committed, never NEXT_PUBLIC_. When the env var
   is absent (local dev / CI build before the project exists), getDb()
   returns null and lib/db.ts falls back to local seed data. */
import "server-only";
import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

let cached: Firestore | null | undefined;

export function getDb(): Firestore | null {
  if (cached !== undefined) return cached;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) {
    cached = null;
    return cached;
  }
  try {
    const serviceAccount = JSON.parse(raw);
    const app: App = getApps().length
      ? getApps()[0]
      : initializeApp({ credential: cert(serviceAccount) });
    cached = getFirestore(app);
  } catch {
    // Malformed env: fall back to seed rather than crashing the public site.
    cached = null;
  }
  return cached;
}

export function usingSeedData(): boolean {
  return getDb() === null;
}
