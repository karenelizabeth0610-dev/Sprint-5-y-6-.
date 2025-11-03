import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { API_ENDPOINTS } from '../config/api'
import './Productos.css'

function Productos() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.productos)
        setProductos(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los productos')
        setLoading(false)
      }
    }

    // Actualizar el título de la página
    document.title = 'Catálogo - Mueblería Jota'
    
    fetchProductos()
    
    // Limpiar el título cuando el componente se desmonte
    return () => {
      document.title = 'Mueblería Jota'
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const loadingVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  if (loading) {
    return (
      <motion.div 
        className="productos-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <motion.div 
            className="loading"
            variants={loadingVariants}
            animate="animate"
          >
            <motion.div
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, var(--siena-tostado), var(--vara-de-oro), var(--siena-tostado))",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Cargando productos...
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div 
        className="productos-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container">
          <motion.div 
            className="error"
            animate={{ x: [-10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="productos-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>Nuestro Catálogo</h1>
          <p>Descubrí nuestra colección de muebles sustentables</p>
        </motion.div>

        <motion.div 
          className="productos-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {productos.map((producto, index) => (
              <motion.div
                key={producto._id}
                variants={cardVariants}
                whileHover="hover"
                layout
              >
                <Link to={`/productos/${producto.slug || producto._id}`} className="producto-card">
                  <motion.div 
                    className="producto-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={producto.imagenUrl} alt={producto.nombre} />
                    <motion.div
                      className="image-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div 
                    className="producto-info"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <h3>{producto.nombre}</h3>
                    <motion.p 
                      className="producto-precio"
                      whileHover={{ scale: 1.05, color: "#D4A437" }}
                    >
                      ${producto.precio.toLocaleString()}
                    </motion.p>
                    <motion.button 
                      className="btn btn-outline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Detalles
                    </motion.button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Productos