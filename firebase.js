// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import  { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9PlorHnPUhiQNb7F1UVAJ79fxZ5-TQM",
  authDomain: "insta-893ae.firebaseapp.com",
  projectId: "insta-893ae",
  storageBucket: "insta-893ae.appspot.com",
  messagingSenderId: "957632152059",
  appId: "1:957632152059:web:057519c6390b70a4e34b5e"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage };