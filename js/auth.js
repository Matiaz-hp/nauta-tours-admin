import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgVrsHW7MzvwKBiIXXqt2zHeI9NpJ7pp8",
  authDomain: "nauta-tours.firebaseapp.com",
  projectId: "nauta-tours"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 👉 correos admin permitidos
const ADMINS = [
  "admin@nautatours.com",
  "admin123@gmail.com"
];

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target[0].value.trim().toLowerCase();
  const password = e.target[1].value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // 🔐 marcar sesión admin
    if (ADMINS.includes(email)) {
      localStorage.setItem("adminAuth", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Acceso no autorizado");
    }

  } catch (error) {
    alert("Correo o contraseña incorrectos");
  }
});
