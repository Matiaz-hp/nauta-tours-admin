// 🔐 Guard del panel admin (GitHub Pages)

const isAdmin = localStorage.getItem("adminAuth");

if (isAdmin !== "true") {
  alert("Acceso no autorizado");
  window.location.href = "index.html";
}
