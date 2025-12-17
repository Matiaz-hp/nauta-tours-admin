
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgVrsHW7MzvwKBiIXXqt2zHeI9NpJ7pp8",
  authDomain: "nauta-tours.firebaseapp.com",
  projectId: "nauta-tours",
  storageBucket: "nauta-tours.firebasestorage.app",
  messagingSenderId: "896950306295",
  appId: "1:896950306295:web:59e2a677fc9efab6b69af2",
  measurementId: "G-743FVWPD4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
