# 📱 Mobile API Project

API RESTful desarrollada en **Node.js + Express + Sequelize (SQLite)**, con soporte para **Docker**.  
Diseñada para manejar entidades comunes en una aplicación móvil: productos, usuarios, clases, agenda y facturación.

---

## 🚀 Tecnologías utilizadas

- **Node.js** v18+
- **Express.js** (framework HTTP)
- **Sequelize ORM**
- **SQLite** (base de datos local)
- **Docker & Docker Compose**

---

## 📂 Estructura del proyecto

```
mobile-api-project/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── database.sqlite
└── src/
    ├── app.js
    ├── database/
    │   └── connection.js
    ├── models/
    │   ├── Product.js
    │   ├── User.js
    │   ├── Class.js
    │   ├── Agenda.js
    │   └── Facturacion.js
    ├── controllers/
    │   ├── productController.js
    │   ├── userController.js
    │   ├── classController.js
    │   ├── agendaController.js
    │   └── facturacionController.js
    └── routes/
        ├── productRoutes.js
        ├── userRoutes.js
        ├── classRoutes.js
        ├── agendaRoutes.js
        └── facturacionRoutes.js
```

---

## ⚙️ Instalación local

1. Clona el repositorio o descarga el código:
   ```bash
   git clone https://github.com/tuusuario/mobile-api-project.git
   cd mobile-api-project
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador o Postman en:
   ```
   http://localhost:3000
   ```

---

## 🐳 Ejecución con Docker

1. **Construir y ejecutar el contenedor:**
   ```bash
   docker-compose up --build
   ```

2. **Detener contenedores:**
   ```bash
   docker-compose down
   ```

3. **Limpiar todo (contenedores, volúmenes, redes):**
   ```bash
   docker-compose down -v
   ```

---

## 🔗 Endpoints principales

### 🛒 Productos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/products` | Listar productos |
| POST | `/api/products` | Crear producto |
| GET | `/api/products/:id` | Obtener producto por ID |
| PUT | `/api/products/:id` | Actualizar producto |
| DELETE | `/api/products/:id` | Eliminar producto |

**Ejemplo JSON (POST):**
```json
{
  "name": "Laptop Gamer",
  "price": 1500.99,
  "description": "Potente laptop para juegos",
  "stock": 10
}
```

---

### 👥 Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/users` | Listar usuarios |
| POST | `/api/users` | Crear usuario |
| PUT | `/api/users/:id` | Actualizar usuario |
| DELETE | `/api/users/:id` | Eliminar usuario |

**Ejemplo JSON (POST):**
```json
{
  "firstName": "Adrián",
  "lastName": "González",
  "email": "adrian@example.com",
  "password": "123456",
  "role": "admin"
}
```

---

### 🎓 Clases
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/classes` | Listar clases |
| POST | `/api/classes` | Crear clase |
| PUT | `/api/classes/:id` | Actualizar clase |
| DELETE | `/api/classes/:id` | Eliminar clase |

**Ejemplo JSON (POST):**
```json
{
  "title": "Introducción a Node.js",
  "description": "Clase básica de desarrollo backend",
  "instructor": "Carlos Pérez",
  "schedule": "Lunes 8am - 10am"
}
```

---

### 🗓️ Agenda
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/agenda` | Listar eventos |
| POST | `/api/agenda` | Crear evento |
| PUT | `/api/agenda/:id` | Actualizar evento |
| DELETE | `/api/agenda/:id` | Eliminar evento |

**Ejemplo JSON (POST):**
```json
{
  "title": "Reunión del equipo",
  "date": "2025-10-20",
  "notes": "Presentar avances del proyecto"
}
```

---

### 💰 Facturación
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/facturacion` | Listar facturas |
| POST | `/api/facturacion` | Crear factura |
| PUT | `/api/facturacion/:id` | Actualizar factura |
| DELETE | `/api/facturacion/:id` | Eliminar factura |

**Ejemplo JSON (POST):**
```json
{
  "userId": 1,
  "total": 250.50,
  "status": "pending",
  "details": "Pago mensual de suscripción"
}
```

---

## 🧩 Sincronización de la base de datos

Si necesitas reiniciar la base de datos desde cero:
```bash
npm run migrate
```
Esto eliminará y recreará todas las tablas en `database.sqlite`.

---

## 📦 Scripts disponibles

| Comando | Descripción |
|----------|--------------|
| `npm start` | Ejecuta la app normalmente |
| `npm run dev` | Ejecuta con **nodemon** (recarga automática) |
| `npm run migrate` | Fuerza la sincronización de la base de datos |

---

## 🧠 Autor

Desarrollado por **Adrián González Romero**  
Proyecto académico - **Programación de Móviles**

---

## 🧾 Licencia

MIT © 2025  
Puedes modificar y usar este proyecto libremente para aprendizaje o desarrollo personal.
