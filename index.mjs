import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaArchivo = path.join(__dirname, "data", "viajes.json");

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// GET /viajes
app.get("/viajes", async (req, res) => {
    try {
        let viajes;

        try {
            // Intentar leer archivo
            const contenido = await fs.readFile(rutaArchivo, "utf-8");
            viajes = JSON.parse(contenido);
        } catch {
            // Si no existe, traer de la API
            const response = await fetch("https://69f8f90df7044aa0103eae4a.mockapi.io/Viajes");
            const data = await response.json();

            // Crear carpeta por si no existe
            await fs.mkdir(path.join(__dirname, "data"), { recursive: true });

            // Guardar archivo
            await fs.writeFile(rutaArchivo, JSON.stringify(data, null, 2));

            viajes = data;
        }

        res.status(200).json(viajes);

    } catch (error) {
        console.error("ERROR REAL:", error);
        res.status(500).json({ error: "Error al procesar viajes" });
    }
});

// 404
app.use((req, res) => {
    res.status(404).send("Recurso no encontrado");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});