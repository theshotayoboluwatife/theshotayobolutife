// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkTwonmuv-3SwEUz8L3HRscyjHfxyJkUk",
  authDomain: "teddverse-2e04f.firebaseapp.com",
  projectId: "teddverse-2e04f",
  storageBucket: "teddverse-2e04f.firebasestorage.app",
  messagingSenderId: "618492162667",
  appId: "1:618492162667:web:3a6b51e522160f8ae2372e",
  measurementId: "G-LB2KY30M0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
