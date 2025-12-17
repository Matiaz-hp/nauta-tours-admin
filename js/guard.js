import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgVrsHW7MzvwKBiIXXqt2zHeI9NpJ7pp8",
  authDomain: "nauta-tours.firebaseapp.com",
  projectId: "nauta-tours"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 LISTA BLANCA DE ADMINS
const ADMINS = [
  "admin@nautatours.com",
  "admin123@gmail.com"
];

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const email = user.email.toLowerCase();

  if (!ADMINS.includes(email)) {
    alert("Acceso no autorizado");
    window.location.href = "index.html";
  }
});
