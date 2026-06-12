/// <reference types="vite/client" />

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCTLvE8492eEOjhF-gLJdawBZmSrrHozyg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "earn-d6f28.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://earn-d6f28-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "earn-d6f28",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "earn-d6f28.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "807732316909",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:807732316909:web:aad3c78ee6d99571941ae4"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
