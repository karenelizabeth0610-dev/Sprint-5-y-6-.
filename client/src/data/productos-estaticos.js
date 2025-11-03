// Datos estáticos de productos para versión sin backend
export const productos = [
  {
    _id: "1",
    nombre: "Aparador Uspallata",
    slug: "aparador-uspallata",
    descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    precio: 135000,
    srcImg: "https://i.ibb.co/RGvxZk9k/Aparador-Uspallata.png",
    medidas: "180 × 45 × 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    acabado: "Aceite natural ecológico",
    origen: "Argentina",
    peso: "68 kg",
    capacidad: "6 compartimentos interiores",
    stock: 10
  },
  // ... resto de productos
];

export const getProductos = () => productos;
export const getProductoPorId = (id) => productos.find(p => p._id === id);
export const getProductoPorSlug = (slug) => productos.find(p => p.slug === slug);