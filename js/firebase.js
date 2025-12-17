// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgVrsHW7MzvwKBiIXXqt2zHeI9NpJ7pp8",
  authDomain: "nauta-tours.firebaseapp.com",
  projectId: "nauta-tours",
  storageBucket: "nauta-tours.firebasestorage.app",
  messagingSenderId: "896950306295",
  appId: "1:896950306295:web:59e2a677fc9efab6b69af2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

