// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4NLYbUxSCoaDacxz4ivhQ1S0_5Pjkxes",
  authDomain: "netflixgpt-9d66b.firebaseapp.com",
  projectId: "netflixgpt-9d66b",
  storageBucket: "netflixgpt-9d66b.appspot.com",
  messagingSenderId: "708150331704",
  appId: "1:708150331704:web:f24984e69213ce869959cd",
  measurementId: "G-0M1Q1B5C08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();