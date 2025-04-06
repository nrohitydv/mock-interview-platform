// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0OAI8TVoVTZT6UyowId7ykf1Q8_aLfeA",
  authDomain: "prepwise-5727e.firebaseapp.com",
  projectId: "prepwise-5727e",
  storageBucket: "prepwise-5727e.firebasestorage.app",
  messagingSenderId: "417649339727",
  appId: "1:417649339727:web:6a0c6a2de4828756c7a93a",
  measurementId: "G-NKMFXSVTZZ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
