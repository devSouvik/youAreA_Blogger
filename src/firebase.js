// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-22b94.firebaseapp.com",
  projectId: "fir-22b94",
  storageBucket: "fir-22b94.appspot.com",
  messagingSenderId: "886049564095",
  appId: "1:886049564095:web:6f96f782a984cdbd3aad0a",
  measurementId: "G-JXL9Z29QX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
