# 🚀 Guía de Despliegue - Mueblería Jota

## Entregables del Sprint 5 y 6

### ✅ 1. Repositorio GitHub
- **Estructura requerida:** `/client` y `/backend`
- **URL:** `https://github.com/tu-usuario/muebleria-jota`

### ✅ 2. Frontend Desplegado
- **Plataforma:** Hostinger
- **URL:** `https://kioskito.click/MuebleriaJota`

### ✅ 3. Backend Desplegado  
- **Plataforma:** Render
- **URL:** `https://muebleria-jota-api.onrender.com`

### ✅ 4. README.md Actualizado
- Enlaces a sitios desplegados ✓
- Instrucciones de configuración ✓

## 📋 Pasos de Despliegue

### Frontend (Hostinger)
1. **Build del proyecto:**
   ```bash
   cd frontend
   npm run build
   ```
2. **Subir a Hostinger:**
   - File Manager → `public_html/MuebleriaJota/`
   - Subir todo el contenido de `dist/`

### Backend (Render)
1. **Preparar repositorio:**
   - Asegurar estructura `/client` y `/backend`
   - Push a GitHub
2. **Configurar en Render:**
   - Conectar repositorio
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. **Variables de entorno:**
   ```
   MONGODB_URI=mongodb+srv://muebleria-admin:Caracolito2002@cluster0.cmahfcv.mongodb.net/muebleria-jota
   PORT=5000
   NODE_ENV=production
   ```

## 🔗 URLs Finales
- **Frontend:** https://kioskito.click/MuebleriaJota
- **Backend API:** https://muebleria-jota-api.onrender.com
- **API Productos:** https://muebleria-jota-api.onrender.com/api/productos

## ✅ Checklist Final
- [ ] Repositorio en GitHub con estructura correcta
- [ ] Frontend funcionando en Hostinger
- [ ] Backend funcionando en Render
- [ ] API conectada a MongoDB Atlas
- [ ] README.md actualizado con todos los enlaces