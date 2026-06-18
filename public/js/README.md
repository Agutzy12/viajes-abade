# Viajes Abade

Proyecto desarrollado para la materia **Aplicaciones Web II**.

## Descripción

Viajes Abade es una aplicación web destinada a la gestión y visualización de viajes para adultos mayores.

El proyecto fue desarrollado de manera incremental durante tres trabajos prácticos, incorporando progresivamente nuevas tecnologías y funcionalidades.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- Git
- GitHub

---

# Trabajos Prácticos

## TP1 - Planificación del proyecto

Se realizó la propuesta inicial del sistema.

Incluye:

- Definición del proyecto.
- Objetivos.
- Justificación.
- Cronograma.
- Organización del desarrollo.

---

## TP2 - Desarrollo del Back-End

Se implementó un servidor utilizando Node.js y Express.

Características:

- Servidor web con Express.
- API para obtener los viajes.
- Consumo de datos desde MockAPI.
- Organización inicial del proyecto.
- Publicación del proyecto mediante GitHub.

---

## TP3 - CRUD y Base de Datos

Se reemplazó MockAPI por PostgreSQL y se implementó un CRUD completo.

Se desarrolló:

- Patrón MVC.
- API REST.
- Base de datos PostgreSQL.
- Endpoints:
  - GET
  - GET por ID
  - POST
  - PUT
  - DELETE
- Panel de administración.
- Integración del Front-End con la API.

---

# Estructura del proyecto

```

database/
controllers/
models/
routes/
public/
css/
js/
index.mjs
package.json

```

---

# Ejecución

Instalar dependencias

```bash
npm install
```

Iniciar servidor

```bash
npm run dev
```

Servidor

```
http://localhost:3000
```

---

# Autor

Agustín Benítez

Aplicaciones Web II

## Funcionalidades

- Visualización de viajes disponibles.
- Filtrado de viajes.
- Alta de nuevos viajes.
- Modificación de viajes.
- Eliminación de viajes.
- Persistencia de datos mediante PostgreSQL.