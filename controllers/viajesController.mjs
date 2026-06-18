import * as modelo from "../models/viajesModel.mjs";

export async function getViajes(req, res) {
    const viajes = await modelo.obtenerViajes();
    res.json(viajes);
}

export async function getViaje(req, res) {
    const viaje = await modelo.obtenerViajePorId(req.params.id);

    if (!viaje) {
        return res.status(404).json({ mensaje: "Viaje no encontrado" });
    }

    res.json(viaje);
}

export async function postViaje(req, res) {
    const viaje = await modelo.crearViaje(req.body);
    res.status(201).json(viaje);
}

export async function putViaje(req, res) {
    const viaje = await modelo.actualizarViaje(req.params.id, req.body);
    res.json(viaje);
}

export async function deleteViaje(req, res) {
    await modelo.eliminarViaje(req.params.id);
    res.json({ mensaje: "Viaje eliminado" });
}