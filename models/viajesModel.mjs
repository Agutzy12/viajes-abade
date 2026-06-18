import pool from "../database/conexion.mjs";

export async function obtenerViajes() {
    const resultado = await pool.query("SELECT * FROM viajes ORDER BY id");
    return resultado.rows;
}

export async function obtenerViajePorId(id) {
    const resultado = await pool.query(
        "SELECT * FROM viajes WHERE id = $1",
        [id]
    );

    return resultado.rows[0];
}

export async function crearViaje(viaje) {
    const { destino, fecha, duracion, hotel, excursion, coordinacion, precio } = viaje;

    const resultado = await pool.query(
        `INSERT INTO viajes
        (destino, fecha, duracion, hotel, excursion, coordinacion, precio)
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *`,
        [destino, fecha, duracion, hotel, excursion, coordinacion, precio]
    );

    return resultado.rows[0];
}

export async function actualizarViaje(id, viaje) {
    const { destino, fecha, duracion, hotel, excursion, coordinacion, precio } = viaje;

    const resultado = await pool.query(
        `UPDATE viajes
        SET destino=$1,
            fecha=$2,
            duracion=$3,
            hotel=$4,
            excursion=$5,
            coordinacion=$6,
            precio=$7
        WHERE id=$8
        RETURNING *`,
        [destino, fecha, duracion, hotel, excursion, coordinacion, precio, id]
    );

    return resultado.rows[0];
}

export async function eliminarViaje(id) {
    await pool.query(
        "DELETE FROM viajes WHERE id = $1",
        [id]
    );
}