/**
 * make-admin.js — grant the `admin` custom claim to ONE Firebase Auth user
 * (ARCHITECTURE §5). Run it ONCE, locally — never deploy it.
 *
 * Usage:
 *   FIREBASE_SERVICE_ACCOUNT='<service account JSON>' node scripts/make-admin.js <uid>
 * or with a key file:
 *   GOOGLE_APPLICATION_CREDENTIALS=./service-account.json node scripts/make-admin.js <uid>
 *
 * Find the UID in Firebase Console -> Authentication -> Users, after signing
 * in once with the Google account that will own the admin panel.
 * The user must sign out and back in afterwards for the claim to appear in
 * their token (getIdTokenResult().claims.admin === true).
 */
const admin = require("firebase-admin");

const uid = process.argv[2];
if (!uid) {
  console.error("Usage: node scripts/make-admin.js <uid>");
  process.exit(1);
}

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });
} else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  admin.initializeApp({ credential: admin.credential.applicationDefault() });
} else {
  console.error(
    "Set FIREBASE_SERVICE_ACCOUNT (JSON string) or GOOGLE_APPLICATION_CREDENTIALS (path to the key file) first."
  );
  process.exit(1);
}

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(async () => {
    const user = await admin.auth().getUser(uid);
    console.log(`admin claim set for ${user.email || uid}`);
    console.log("Ask that user to sign out and back in so the claim takes effect.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Failed:", err.message);
    process.exit(1);
  });
