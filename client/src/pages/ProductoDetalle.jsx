import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Trash2 } from 'lucide-react'
import axios from 'axios'
import { API_ENDPOINTS } from '../config/api'
import './ProductoDetalle.css'

function ProductoDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.productoPorId(id))
        setProducto(response.data)
        // Actualizar el título de la página
        document.title = `${response.data.nombre} - Mueblería Jota`
        setLoading(false)
      } catch (err) {
        setError('Error al cargar el producto')
        setLoading(false)
      }
    }

    fetchProducto()
    
    // Limpiar el título cuando el componente se desmonte
    return () => {
      document.title = 'Mueblería Jota'
    }
  }, [id])

  const handleDelete = async () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${producto.nombre}"?`)) {
      try {
        // Usar el _id real del producto para eliminar, no el slug de la URL
        await axios.delete(API_ENDPOINTS.productoPorId(producto._id))
        navigate('/productos')
      } catch (err) {
        alert('Error al eliminar el producto')
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  if (loading) {
    return (
      <motion.div 
        className="producto-detalle-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <motion.div 
            className="loading"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Cargando producto...
          </motion.div>
        </div>
      </motion.div>
    )
  }

  if (error || !producto) {
    return (
      <motion.div 
        className="producto-detalle-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container">
          <motion.div 
            className="error"
            animate={{ x: [-10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {error || 'Producto no encontrado'}
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="producto-detalle-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={id}
      >
        <div className="container">
          <motion.button 
            onClick={() => navigate('/productos')} 
            className="btn-back"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            Volver al catálogo
          </motion.button>

          <motion.div 
            className="producto-detalle"
            variants={containerVariants}
          >
            <motion.div 
              className="detalle-imagen"
              variants={imageVariants}
            >
              <motion.img 
                src={producto.imagenUrl} 
                alt={producto.nombre}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="detalle-info"
              variants={itemVariants}
            >
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {producto.nombre}
              </motion.h1>
              
              <motion.p 
                className="detalle-precio"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: "#D4A437" }}
              >
                ${producto.precio.toLocaleString()}
              </motion.p>

              <motion.div 
                className="detalle-descripcion"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3>Descripción</h3>
                <p>{producto.descripcion}</p>
              </motion.div>

              {(producto.medidas || producto.materiales || producto.acabado || producto.origen || producto.stock !== undefined) && (
                <motion.div 
                  className="detalle-specs"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3>Especificaciones</h3>
                  {producto.medidas && (
                    <motion.div 
                      className="spec-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(212, 164, 55, 0.1)" }}
                    >
                      <strong>Medidas:</strong> {producto.medidas}
                    </motion.div>
                  )}
                  {producto.materiales && (
                    <motion.div 
                      className="spec-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(212, 164, 55, 0.1)" }}
                    >
                      <strong>Materiales:</strong> {producto.materiales}
                    </motion.div>
                  )}
                  {producto.acabado && (
                    <motion.div 
                      className="spec-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(212, 164, 55, 0.1)" }}
                    >
                      <strong>Acabado:</strong> {producto.acabado}
                    </motion.div>
                  )}
                  {producto.origen && (
                    <motion.div 
                      className="spec-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(212, 164, 55, 0.1)" }}
                    >
                      <strong>Origen:</strong> {producto.origen}
                    </motion.div>
                  )}
                  {producto.stock !== undefined && (
                    <motion.div 
                      className="spec-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(212, 164, 55, 0.1)" }}
                    >
                      <strong>Stock:</strong> {producto.stock} unidades
                    </motion.div>
                  )}
                </motion.div>
              )}

              <motion.div 
                className="detalle-actions"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consultar Disponibilidad
                </motion.button>
                <motion.button 
                  onClick={handleDelete} 
                  className="btn btn-danger"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Eliminar este producto (Funcionalidad requerida por la consigna)"
                >
                  <Trash2 size={18} />
                  Eliminar
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductoDetalle