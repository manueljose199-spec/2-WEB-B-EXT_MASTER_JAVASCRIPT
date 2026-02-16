const form = document.getElementById("formComentario");
const textarea = document.getElementById("comentario");
const lista = document.getElementById("listaComentarios");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que la página se recargue

    const texto = textarea.value;

    // Evitar comentarios vacíos
    if (texto.trim() === "") {
        return;
    }

    // Crear contenedor del comentario
    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");

    // Crear texto del comentario
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;

    // Crear fecha y hora
    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    fecha.textContent = new Date().toLocaleString();

    // Crear botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    botonEliminar.addEventListener("click", function () {
        divComentario.remove();
    });

    // Agregar elementos al comentario
    divComentario.appendChild(pTexto);
    divComentario.appendChild(fecha);
    divComentario.appendChild(botonEliminar);

    // Agregar comentario a la lista
    lista.appendChild(divComentario);

    // Limpiar textarea
    textarea.value = "";
});
