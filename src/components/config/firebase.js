// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5TCcrKxTWSIhbQ58z1drA53hrW1rDag",
  authDomain: "peotofolio.firebaseapp.com",
  projectId: "peotofolio",
  storageBucket: "peotofolio.appspot.com",
  messagingSenderId: "114388639801",
  appId: "1:114388639801:web:9281439b1350689dafede8",
  measurementId: "G-37K1TESFFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
