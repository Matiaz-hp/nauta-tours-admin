
// js/auth.js
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      const uid = cred.user.uid;
      const userRef = doc(db, "users", uid);
      const snap = await getDoc(userRef);

      if (!snap.exists() || snap.data().role !== "admin") {
        throw new Error("Acceso no autorizado");
      }

      window.location.href = "dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
