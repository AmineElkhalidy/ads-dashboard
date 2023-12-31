import { deleteApp, getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

let firebaseApp;

// check if there is no app
if (!getApps().length) {
  // Initialize firebase
  firebaseApp = initializeApp(firebaseConfig);
} else {
  // Take the first app
  firebaseApp = getApp();
  // Deleting it
  deleteApp(firebaseApp);
  // Re-initializing
  firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

export const googleProvider = new GoogleAuthProvider();
