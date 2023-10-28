// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-523ca.firebaseapp.com",
  projectId: "mern-estate-523ca",
  storageBucket: "mern-estate-523ca.appspot.com",
  messagingSenderId: "31433792232",
  appId: "1:31433792232:web:e18974141d1bb194c4075d",
  measurementId: "G-H7SC31BWFH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    