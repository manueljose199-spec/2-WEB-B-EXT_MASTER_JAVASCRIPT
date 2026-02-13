const libro={
    titulo: "El Universo de las Estrellas",
    autor: "Laura Sánchez",
    anio: 2019,
    estado: "disponible", // 'disponible' o 'prestado'

    capitulos: [
        "¿Qué son las estrellas?",
        "Nacimiento de una estrella",
        "Tipos de estrellas",
        "Constelaciones y galaxias"
    ],



    describirLibro() {
        console.log(
            `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
        );
    
    },

     cambiarEstado() {
    
        if (this.estado === "disponible") {
            this.estado = "prestado";
        } else {
            this.estado = "disponible";
        }
        console.log("Estado:El libro ahora está: " + this.estado);
    },

    agregarCapitulo(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log("Capítulo agregado: " + nombreCapitulo);
    },

    eliminarCapitulo() {
        if (this.capitulos.length > 0) {
            var eliminado = this.capitulos.pop();
            console.log("Capítulo eliminado: " + eliminado);
        } else {
            console.log("No hay capítulos para eliminar.");
        }
    },

    mostrarCapitulos() {
        for (let i = 0; i < this.capitulos.length; i++) {
            console.log((i + 1) + ". " + this.capitulos[i]);
        }
    }
};


libro.describirLibro();
libro.cambiarEstado();
libro.agregarCapitulo("Estrellas supernovas");
libro.eliminarCapitulo();
libro.mostrarCapitulos();