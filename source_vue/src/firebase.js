// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKRGWlrv21J6-lM_vhXcIFAYONLDENfqM",
  authDomain: "matosrent-1b23b.firebaseapp.com",
  projectId: "matosrent-1b23b",
  storageBucket: "matosrent-1b23b.firebasestorage.app",
  messagingSenderId: "286296733174",
  appId: "1:286296733174:web:a32a711c6e2306da1a43d7",
  measurementId: "G-VYPGHM4DK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };