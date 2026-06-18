import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import viajesRoutes from "./routes/viajesRoutes.mjs";
import cors from "cors";
import pool from "./database/conexion.mjs";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaArchivo = path.join(__dirname, "data", "viajes.json");

app.use(cors());
app.use(express.json());

app.use("/api/viajes", viajesRoutes);

// GET /viajes
app.get("/viajes", async (req, res) => {
    try {
        let viajes;

        try {
            const contenido = await fs.readFile(rutaArchivo, "utf-8");
            viajes = JSON.parse(contenido);
        } catch {
            const response = await fetch("https://69f8f90df7044aa0103eae4a.mockapi.io/Viajes");
            const data = await response.json();

            await fs.mkdir(path.join(__dirname, "data"), { recursive: true });
            await fs.writeFile(rutaArchivo, JSON.stringify(data, null, 2));

            viajes = data;
        }

        res.status(200).json(viajes);

    } catch (error) {
        console.error("ERROR REAL:", error);
        res.status(500).json({ error: "Error al procesar viajes" });
    }
});

app.use((req, res) => {
    res.status(404).send("Recurso no encontrado");
});

try {
    await pool.query("SELECT NOW()");
    console.log("Base conectada correctamente");
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});