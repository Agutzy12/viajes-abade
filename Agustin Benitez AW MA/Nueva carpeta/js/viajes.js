const contenedor = document.getElementById("contenedor-viajes");
const botones = document.querySelectorAll(".filtro-btn");

let viajesGlobal = [];

// Cargar viajes 
async function cargarViajes() {
    try {
        const res = await fetch("http://localhost:3000/viajes");

        console.log("STATUS:", res.status); // 👈 clave

        const data = await res.json();
        console.log("DATA:", data); // 👈 clave

        viajesGlobal = data;
        renderizarViajes(viajesGlobal);

    } catch (error) {
    console.error("ERROR REAL:", error);
    contenedor.innerHTML = "<p>Error al cargar los viajes</p>";
    }
}

// Renderizar viajes
function renderizarViajes(viajes) {
    contenedor.innerHTML = "";

    viajes.forEach(viaje => {
        const detallesLista = viaje.detalles
            .split(",")
            .map(d => `<li>${d.trim()}</li>`)
            .join("");

        const article = document.createElement("article");
        article.classList.add("tarjeta-viaje");

        article.innerHTML = `
            <div class="tarjeta-contenido">
                <h3>${viaje.titulo}</h3>
                <p class="fecha">${viaje.fecha}</p>
                <ul class="detalles">
                    ${detallesLista}
                </ul>
                <p class="precio"><strong>Precio:</strong> ${viaje.precio}</p>
                <a href="formulario.html" class="btn-reservar">Reservar viaje</a>
            </div>
        `;

        contenedor.appendChild(article);
    });
}

// Filtros
botones.forEach(boton => {
    boton.addEventListener("click", () => {

        botones.forEach(b => b.classList.remove("active"));
        boton.classList.add("active");

        const categoria = boton.dataset.categoria;

        if (categoria === "todos") {
            renderizarViajes(viajesGlobal);
        } else {
            const filtrados = viajesGlobal.filter(v => v.categoria === categoria);
            renderizarViajes(filtrados);
        }
    });
});

// Iniciar
cargarViajes();