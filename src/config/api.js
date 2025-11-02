// Configuración de URLs de la API
const API_CONFIG = {
  // Para desarrollo local
  development: 'http://localhost:5000',
  
  // Para producción en Kioskito.click
  production: 'https://api.kioskito.click/muebleria-jota'
}

// Detectar si estamos en desarrollo o producción
const isDevelopment = import.meta.env.DEV

// Exportar la URL base de la API
export const API_BASE_URL = isDevelopment ? API_CONFIG.development : API_CONFIG.production

// URLs específicas de endpoints
export const API_ENDPOINTS = {
  productos: `${API_BASE_URL}/api/productos`,
  productoPorId: (identifier) => `${API_BASE_URL}/api/productos/${identifier}`,
  productoPorSlug: (slug) => `${API_BASE_URL}/api/productos/${slug}`
}

export default API_BASE_URL