// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ5g9_ihUeOOjie34PCjPpoZGpybRR3zk",
  authDomain: "hamisha-epic-tours.firebaseapp.com",
  projectId: "hamisha-epic-tours",
  storageBucket: "hamisha-epic-tours.firebasestorage.app",
  messagingSenderId: "549911979761",
  appId: "1:549911979761:web:e73484fa23b170b638eb50",
  measurementId: "G-BDNMC52ZR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);