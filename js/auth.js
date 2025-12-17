import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// 🔥 Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgVrsHW7MzvwKBiIXXqt2zHeI9NpJ7pp8",
  authDomain: "nauta-tours.firebaseapp.com",
  projectId: "nauta-tours",
  storageBucket: "nauta-tours.firebasestorage.app",
  messagingSenderId: "896950306295",
  appId: "1:896950306295:web:59e2a677fc9efab6b69af2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🎯 Login admin
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  try {
    // Login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("✅ Usuario autenticado:", user.uid);

    // Buscar en Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    console.log("📄 Existe documento:", userSnap.exists());

    if (!userSnap.exists()) {
      alert("Usuario no registrado como administrador");
      return;
    }

    const userData = userSnap.data();
    console.log("🧾 Datos Firestore:", userData);

    // Validar rol
    if (userData.role === "admin") {
      window.location.href = "dashboard.html";
    } else {
      alert("Acceso no autorizado");
    }

  } catch (error) {
    console.error("❌ Error login:", error);
    alert("Credenciales incorrectas");
  }
});
