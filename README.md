# Mueblería Jota

![Mueblería Jota Logo](client/public/image.png)

Plataforma e-commerce de muebles sustentables con diseño argentino. Sistema completo con frontend React + Vite y backend Express + MongoDB.

## Descripción del Proyecto

Mueblería Jota es una tienda online especializada en muebles fabricados con madera certificada FSC® y materiales naturales. El proyecto implementa un sistema completo de gestión de productos con catálogo, detalles de producto, formulario de creación y página de contacto.

### Identidad de Marca

- **Paleta de Colores:**
  - Siena Tostado `#A0522D` - Títulos principales
  - Verde Salvia `#87A96B` - Acentos secundarios
  - Alabastro Cálido `#F5E6D3` - Fondos
  - Vara de Oro `#D4A437` - Detalles premium
  - Rosa Polvoriento `#C47A6D` - Acentos suaves

- **Tipografía:**
  - Primaria: Inter (Light, Regular, Medium, Bold)
  - Secundaria: Playfair Display (Regular, Bold)

- **Valores:** Sustentabilidad, diseño atemporal, calidad duradera

## Tecnologías

### Frontend
- React 19
- React Router DOM 7
- Vite 7
- Axios
- CSS Modules

### Backend
- Node.js
- Express 4
- MongoDB + Mongoose
- CORS
- dotenv

## Estructura del Proyecto

```
muebleria-jota/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── config/
│   │   │   └── api.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Productos.jsx
│   │   │   ├── Productos.css
│   │   │   ├── ProductoDetalle.jsx
│   │   │   ├── ProductoDetalle.css
│   │   │   ├── CrearProducto.jsx
│   │   │   ├── CrearProducto.css
│   │   │   ├── Contacto.jsx
│   │   │   └── Contacto.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── README.md
│   └── DEPLOYMENT.md
└── README.md
```

## Instalación y Configuración

### Prerrequisitos
- Node.js 18+ y npm
- Cuenta en MongoDB Atlas

### 1. Clonar el Repositorio
```bash
git clone <repository-url>
cd muebleria-jota
```

### 2. Configurar Backend

```bash
cd backend
npm install
```

Crear archivo `.env` en la carpeta `backend/`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/muebleria-jota?retryWrites=true&w=majority
PORT=5000
```

### 3. Configurar Frontend

```bash
cd client
npm install
```

### 4. Iniciar MongoDB Atlas

1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crear nuevo cluster
3. Configurar acceso de red (IP Whitelist)
4. Crear usuario de base de datos
5. Obtener connection string y actualizar `.env`

## Uso

### Desarrollo

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```
El servidor backend correrá en `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```
El frontend correrá en `http://localhost:3000`

### Producción

**Build del Frontend:**
```bash
npm run build
```

## API Endpoints

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/productos` | Obtener todos los productos |
| GET | `/api/productos/:id` | Obtener producto por ID |
| POST | `/api/productos` | Crear nuevo producto |
| PUT | `/api/productos/:id` | Actualizar producto |
| DELETE | `/api/productos/:id` | Eliminar producto |

### Ejemplo de Producto

```json
{
  "nombre": "Aparador Uspallata",
  "descripcion": "Aparador de seis puertas fabricado en nogal sostenible...",
  "precio": 135000,
  "stock": 10,
  "imagenUrl": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  "medidas": "180 × 45 × 75 cm",
  "materiales": "Nogal macizo FSC®, herrajes de latón",
  "acabado": "Aceite natural ecológico",
  "origen": "Argentina"
}
```

## Rutas del Frontend

- `/` - Página de inicio
- `/productos` - Catálogo de productos
- `/productos/:id` - Detalle de producto
- `/admin/crear-producto` - Formulario de creación (admin)
- `/contacto` - Página de contacto

## Funcionalidades

### Catálogo de Productos
- Visualización en grid responsive
- Carga dinámica desde API
- Estados de carga y error
- Hover effects y animaciones

### Detalle de Producto
- Información completa del producto
- Especificaciones técnicas
- Botón para eliminar (confirmación)
- Navegación fluida

### Crear Producto (Admin)
- Formulario controlado
- Validación de campos requeridos
- Redirección automática tras crear
- Manejo de errores

### Contacto
- Formulario con validaciones
- Feedback visual de errores
- Confirmación de envío
- Información de contacto

## 🚀 Despliegue

### Frontend (Hostinger)
1. **Build del proyecto:**
   ```bash
   cd frontend
   npm run build
   ```
2. **Subir a Hostinger:**
   - Subir contenido de `dist/` a `public_html/MuebleriaJota/`
   - URL final: `https://kioskito.click/MuebleriaJota`

### Backend (Render)
1. **Crear cuenta en [Render](https://render.com)**
2. **Conectar repositorio GitHub**
3. **Configurar Web Service:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
4. **Variables de entorno:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/muebleria-jota
   PORT=5000
   NODE_ENV=production
   ```

### Configuración de Variables de Entorno

**Para desarrollo local (.env):**
```env
MONGODB_URI=mongodb+srv://muebleria-admin:Caracolito2002@cluster0.cmahfcv.mongodb.net/muebleria-jota?retryWrites=true&w=majority
PORT=5000
```

**Para producción (Render):**
- Configurar las mismas variables en el panel de Render

## 🚀 Enlaces de Despliegue

- **Frontend:** [https://kioskito.click/MuebleriaJota](https://kioskito.click/MuebleriaJota)
- **Backend:** [https://muebleria-jota-api.onrender.com](https://muebleria-jota-api.onrender.com)
- **Repositorio:** [https://github.com/karenelizabeth0610-dev/Sprint-5-y-6-](https://github.com/karenelizabeth0610-dev/Sprint-5-y-6-)

## 📋 Entregables del Proyecto

✅ **1. Repositorio GitHub** con carpetas `/client` y `/backend`  
✅ **2. Frontend desplegado** en Hostinger: `https://kioskito.click/MuebleriaJota`  
✅ **3. Backend desplegado** en Render: `https://muebleria-jota-api.onrender.com`  
✅ **4. README.md actualizado** con enlaces y configuración

## Contribuir

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## Contacto

Mueblería Jota
- Email: info@muebleriajota.com.ar
- Teléfono: +54 11 1234-5678

---

