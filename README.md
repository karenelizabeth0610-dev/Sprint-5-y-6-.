# Mueblería Jota - Frontend

Frontend de la aplicación de e-commerce para Mueblería Jota, especializada en muebles sustentables con diseño argentino.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 🎨 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx
│   └── Header.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Productos.jsx
│   ├── Productos.css
│   ├── ProductoDetalle.jsx
│   ├── ProductoDetalle.css
│   ├── CrearProducto.jsx
│   ├── CrearProducto.css
│   ├── Contacto.jsx
│   └── Contacto.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🛣️ Rutas

- `/` - Página de inicio
- `/productos` - Catálogo de productos
- `/productos/:id` - Detalle de producto
- `/admin/crear-producto` - Formulario de creación (admin)
- `/contacto` - Página de contacto

## 🎨 Paleta de Colores

- **Siena Tostado:** `#A0522D` - Títulos principales
- **Verde Salvia:** `#87A96B` - Acentos secundarios
- **Alabastro Cálido:** `#F5E6D3` - Fondos
- **Vara de Oro:** `#D4A437` - Detalles premium
- **Rosa Polvoriento:** `#C47A6D` - Acentos suaves

## 🔧 Configuración del Backend

### Para Desarrollo Local:
El proyecto está configurado para usar `http://localhost:5000` automáticamente en desarrollo.

### Para Producción:
1. Edita el archivo `src/config/api.js`
2. Cambia la URL de producción por tu backend desplegado:
```javascript
production: 'https://tu-backend-en-render.onrender.com'
```

### Variables de Entorno (Opcional):
También puedes usar variables de entorno creando un archivo `.env`:
```
VITE_API_URL=https://tu-backend-en-render.onrender.com
```

## 📱 Responsive Design

El diseño está optimizado para:
- 📱 Mobile: 320px+
- 📱 Tablet: 768px+
- 💻 Desktop: 1024px+

## ✨ Características

- ✅ Diseño responsive
- ✅ Animaciones suaves con Framer Motion
- ✅ Iconos modernos con Lucide React
- ✅ Estados de carga y error
- ✅ Formularios controlados
- ✅ Navegación programática
- ✅ Glassmorphism effects
- ✅ Paleta de colores de marca




### Variables de Entorno

Asegúrate de configurar la URL del backend en producción.

## 📝 Notas

- El formulario de contacto NO se conecta al backend (según especificaciones)
- Todas las animaciones están optimizadas para performance
- El diseño sigue las mejores prácticas de UX/UI
- Compatible con todos los navegadores modernos
