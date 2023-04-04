import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD69kOkflQQ_ydPjjsfcvBNwMyFJwP-i6U",
  authDomain: "final-e-ride-stage-4.firebaseapp.com",
  projectId: "final-e-ride-stage-4",
  storageBucket: "final-e-ride-stage-4.appspot.com",
  messagingSenderId: "887442839254",
  appId: "1:887442839254:web:a1882dca97cf46e1405b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
