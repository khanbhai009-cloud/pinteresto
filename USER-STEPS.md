# USER STEPS — what only you can do (Firebase console + secrets)

The Next.js public site in this folder is complete and builds/runs on local
seed data. To take it live on real data, these steps need YOUR hands — they
involve your Firebase console, your accounts and your secrets. Nothing here
should ever be pasted into a chat; secrets go through the secure vault /
Vercel env settings only.

## 1. Create the Firebase project
- Firebase Console -> Add project (name it e.g. `cozy-canvas`).
- Enable **Firestore Database** (production mode), **Storage**, and
  **Authentication -> Google provider only**. Disable email/password sign-up
  (Authentication -> Settings -> user actions -> disable sign-up).
- Turn ON 2-Step Verification on the Google account you will use for admin
  (ARCHITECTURE §9.5).
- Note: Storage on new projects may ask for the Blaze (pay-as-you-go) plan;
  at this site's scale usage normally stays inside the free quota (§7).

## 2. Get the service account (server secret)
- Project settings -> Service accounts -> **Generate new private key**.
  This downloads a JSON file — it is the master key to your data.
- Put it ONLY in these places, nowhere else:
  - Local dev: paste the whole JSON as one line into `.env.local` as
    `FIREBASE_SERVICE_ACCOUNT=<json>` (see `.env.example`), or
  - Vercel: Project -> Settings -> Environment Variables, same name.
- Never commit it, never send it in chat/email, never prefix it NEXT_PUBLIC_.

## 3. Set the remaining env vars (Vercel project #1)
- `ANALYTICS_SECRET` — any long random string (30+ chars).
- `SITE_URL` — the site's public URL.
- `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` — free Upstash
  database -> REST API credentials (used only for /api/t rate limiting).

## 4. Deploy the security rules
From a machine with the Firebase CLI and this folder:
```
firebase deploy --only firestore:rules,storage
```
(firestore.rules and storage.rules in this folder are ready as-is.)
Then test in the Console Rules Playground: an unauthenticated read MUST fail.

## 5. Make yourself admin (once)
- Sign in once to the (future) admin app with your Google account so the
  user exists; copy its UID from Authentication -> Users.
- On your own machine: `node scripts/make-admin.js <uid>` with the service
  account env set (see the script header). Sign out/in afterwards.
- Optional hardening: enable Firebase App Check on the admin app (§9.4),
  set a Google Cloud budget alert (§9.8).

## 6. Seed the real content
Option A (quick): ask Astro to write a one-off import script that pushes
this project's `lib/seed.ts` data (settings, 4 collections, ~30 products,
4 posts) into Firestore once the service account exists in a local
`.env.local` — after that, the site serves real Firestore data and the
seed file is never used again.
Option B: wait for the admin panel (next build step) and enter content there.

## 7. Deploy the site (Vercel project #1)
- Import this folder as a new Vercel project, add the env vars from step 3,
  deploy. Pages pick up admin changes within ~60s (ISR), no redeploy needed.
- Keep the repo's OLD Vite site running until the Next site is verified —
  do not point the domain over until you have clicked through every page.

## 8. Launch checklist (from ARCHITECTURE §9/§11)
- [ ] Unauthenticated Firestore read fails (Playground test done)
- [ ] Affiliate links open Amazon directly with YOUR tracking ID
      (seed data uses `finisher090-20` — change per post in admin if needed)
- [ ] The disclosure sentence appears in the footer of every page and in
      the box at the top of every post
- [ ] 180-day Associates clock: 3 qualifying sales needed — plan traffic
      (pins -> these guides) before the deadline
- [ ] Re-read the current Associates Operating Agreement before launch;
      it changes often

## Later (next build steps, not part of this delivery)
- The separate ADMIN app (Vercel project #2, own domain, noindex, Google
  sign-in + admin claim) — this is the next task; until it exists, content
  changes go through Firestore console or the import script in step 6.

## 9. Email sending with Resend (LATER phase — not integrated yet)
Email COLLECTION is already live: the newsletter form (homepage dark band +
footer) posts to `POST /api/subscribe`, and addresses are stored in the
Firestore `subscribers` collection (server-only; clients have no access).
**Emails collected before this Resend setup exists are stored safely and
are not lost** — sending simply starts later, to the whole list at once.
When you are ready to actually SEND (welcome email + updates):
- Create a **Resend** account (resend.com) — free tier is enough to start.
- Create an API key there and store it the same way as the other secrets:
  secure vault / Vercel env vars only, **never in chat, never committed**.
  (Ask Astro for a secure-entry box when the time comes.)
- **Sending domain:** for real sends you must verify a domain you own in
  Resend (add the DNS records it shows you) so mail comes from your own
  address and lands in inboxes. Without a custom domain, Resend only
  offers its `resend.dev` test sender, which can mail only your own
  account address — fine for a trial send to yourself, useless for the list.
- The welcome email and broadcast sending code is a separate later build
  step; it is deliberately NOT part of the site today.
