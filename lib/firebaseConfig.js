// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace these placeholders with your actual config values from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAIO3eh6CfTtDHCd-NQSh_cNEHn3-Cro3s",
  authDomain: "tuneflow.firebaseapp.com",
  projectId: "tuneflow-172df",
  storageBucket: "tuneflow-172df.firebasestorage.app",
  messagingSenderId: "230784907605",
  appId: "1:230784907605:web:319e08b18b49393b19d7dc",
};

const app = initializeApp(firebaseConfig);

// Export Auth so you can use it in your components
export const auth = getAuth(app);
