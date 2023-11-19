// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6senYnVf_AgPxKDwQB4yTOe7i33zWc1I",
  authDomain: "netflixgpt-b169a.firebaseapp.com",
  projectId: "netflixgpt-b169a",
  storageBucket: "netflixgpt-b169a.appspot.com",
  messagingSenderId: "240827488238",
  appId: "1:240827488238:web:1fdb5c4dbeda1f04d360ff",
  measurementId: "G-RH82H2BE0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth();

export {auth};