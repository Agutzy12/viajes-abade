const URL = "http://localhost:3000/api/viajes";
let idEditar = null;

const tabla = document.querySelector("#tablaViajes tbody");

async function cargarViajes() {

    const respuesta = await fetch(URL);
    const viajes = await respuesta.json();

    tabla.innerHTML = "";

    viajes.forEach(viaje => {

        tabla.innerHTML += `
            <tr>
                <td>${viaje.id}</td>
                <td>${viaje.destino}</td>
                <td>${viaje.fecha}</td>
                <td>${viaje.precio}</td>

                <td>

                    <button onclick="editarViaje(${viaje.id})">
                        Editar
                    </button>

                    <button onclick="eliminarViaje(${viaje.id})">
                        Eliminar
                    </button>

                </td>

            </tr>
        `;

    });

}

cargarViajes();

const formulario = document.getElementById("formViaje");

formulario.addEventListener("submit", guardarViaje);

async function guardarViaje(event) {

    event.preventDefault();

    const viaje = {
        destino: document.getElementById("destino").value,
        fecha: document.getElementById("fecha").value,
        duracion: document.getElementById("duracion").value,
        hotel: document.getElementById("hotel").value,
        excursion: document.getElementById("excursion").value,
        coordinacion: document.getElementById("coordinacion").value,
        precio: document.getElementById("precio").value
    };

    let metodo = "POST";
    let urlPeticion = URL;

    if (idEditar !== null) {
        metodo = "PUT";
        urlPeticion = `${URL}/${idEditar}`;
    }

    const respuesta = await fetch(urlPeticion, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(viaje)
    });

    if (respuesta.ok) {

        formulario.reset();

        idEditar = null;

        cargarViajes();

    } else {

        alert("No se pudo guardar el viaje.");

    }

}

async function eliminarViaje(id) {

    const confirmar = confirm("¿Seguro que querés eliminar este viaje?");

    if (!confirmar) return;

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (respuesta.ok) {

        cargarViajes();

    } else {

        alert("No se pudo eliminar el viaje.");

    }

}

async function editarViaje(id) {

    const respuesta = await fetch(`${URL}/${id}`);

    const viaje = await respuesta.json();

    idEditar = id;

    document.getElementById("destino").value = viaje.destino;
    document.getElementById("fecha").value = viaje.fecha;
    document.getElementById("duracion").value = viaje.duracion;
    document.getElementById("hotel").value = viaje.hotel;
    document.getElementById("excursion").value = viaje.excursion;
    document.getElementById("coordinacion").value = viaje.coordinacion;
    document.getElementById("precio").value = viaje.precio;

}