// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

console.log("Firebase Configuration:");
console.log(`apiKey: ${firebaseConfig.apiKey}`);
console.log(`authDomain: ${firebaseConfig.authDomain}`);
console.log(`projectId: ${firebaseConfig.projectId}`);
console.log(`storageBucket: ${firebaseConfig.storageBucket}`);
console.log(`messagingSenderId: ${firebaseConfig.messagingSenderId}`);
console.log(`appId: ${firebaseConfig.appId}`);
console.log(`measurementId: ${firebaseConfig.measurementId}`);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
