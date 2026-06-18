# Viajes Abade

Proyecto desarrollado para la materia **Aplicaciones Web II**.

## Descripción

Viajes Abade es una aplicación web destinada a la gestión y visualización de viajes para adultos mayores.

El proyecto fue desarrollado de manera incremental durante tres trabajos prácticos, incorporando progresivamente nuevas tecnologías y funcionalidades.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- Git
- GitHub

---

## Trabajos Prácticos

### TP1 - Planificación del proyecto

En esta primera etapa se realizó la planificación del sistema.

Se desarrolló:

- Definición de la propuesta.
- Justificación del proyecto.
- Organización del equipo y roles.
- Cronograma de trabajo.
- Planificación del desarrollo.

---

### TP2 - Desarrollo del Back-End

Se implementó el servidor web utilizando Node.js y Express.

Características implementadas:

- Servidor con Express.js.
- API para obtener los viajes.
- Consumo de datos desde MockAPI.
- Organización del proyecto.
- Publicación y control de versiones mediante GitHub.

---

### TP3 - CRUD y Base de Datos

En esta etapa se reemplazó MockAPI por PostgreSQL y se desarrolló un CRUD completo siguiendo el patrón MVC.

Se implementó:

- Arquitectura MVC.
- API REST.
- Base de datos PostgreSQL.
- CRUD completo:
  - Obtener todos los viajes.
  - Obtener un viaje por ID.
  - Crear un viaje.
  - Modificar un viaje.
  - Eliminar un viaje.
- Panel de administración para gestionar los viajes.
- Integración del Front-End con la API REST.

---

## Funcionalidades

- Visualización de viajes disponibles.
- Filtrado de viajes por destino.
- Alta de nuevos viajes.
- Edición de viajes existentes.
- Eliminación de viajes.
- Persistencia de datos mediante PostgreSQL.

---

## Estructura del proyecto

```
database/
controllers/
models/
routes/

public/
│
├── css/
├── js/
│   ├── admin.js
│   └── viajes.js
│
├── admin.html
├── formulario.html
├── index.html
├── sobre.html
└── viajes.html

data/

index.mjs
package.json
README.md
```

---

## Instalación

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run dev
```

El servidor se ejecutará en:

```
http://localhost:3000
```

---

## Autor

**Agustín Benítez**

Materia: **Aplicaciones Web II**
