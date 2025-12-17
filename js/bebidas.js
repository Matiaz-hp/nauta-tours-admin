import { supabase } from "./supabase_cliente.js";

/* ===============================
   ELEMENTOS
================================ */
const form = document.getElementById("bebidaForm");
const tableBody = document.getElementById("bebidasTable");

/* ===============================
   CARGAR BEBIDAS
================================ */
async function cargarBebidas() {
  const { data, error } = await supabase
    .from("bebidas")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    tableBody.innerHTML = `<tr><td colspan="4">Error al cargar datos</td></tr>`;
    return;
  }

  if (!data || data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="4">No hay bebidas registradas</td></tr>`;
    return;
  }

  tableBody.innerHTML = "";

  data.forEach((bebida) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${bebida.image_url}" width="60" />
      </td>
      <td>${bebida.nombre}</td>
      <td>${bebida.descripcion || ""}</td>
      <td>${bebida.activo ? "Sí" : "No"}</td>
    `;

    tableBody.appendChild(row);
  });
}

/* ===============================
   AGREGAR BEBIDA
================================ */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const imagen = document.getElementById("imagen").files[0];

  if (!nombre || !imagen) {
    alert("Nombre e imagen son obligatorios");
    return;
  }

  // Nombre único para imagen
  const fileName = `bebidas/${Date.now()}_${imagen.name}`;

  /* SUBIR IMAGEN A SUPABASE STORAGE */
  const { error: uploadError } = await supabase.storage
    .from("imagenes")
    .upload(fileName, imagen);

  if (uploadError) {
    alert("Error al subir imagen");
    return;
  }

  /* OBTENER URL PÚBLICA */
  const { data: publicData } = supabase.storage
    .from("imagenes")
    .getPublicUrl(fileName);

  const imageUrl = publicData.publicUrl;

  /* INSERTAR EN TABLA BEBIDAS */
  const { error: insertError } = await supabase.from("bebidas").insert([
    {
      nombre,
      descripcion,
      image_url: imageUrl,
      activo: true
    }
  ]);

  if (insertError) {
    alert("Error al guardar bebida");
    return;
  }

  // Limpiar formulario
  form.reset();

  // Recargar tabla
  cargarBebidas();
});

/* ===============================
   INICIAL
================================ */
cargarBebidas();
