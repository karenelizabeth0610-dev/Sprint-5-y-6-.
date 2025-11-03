import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Save, X } from 'lucide-react'
import axios from 'axios'
import { API_ENDPOINTS } from '../config/api'
import './CrearProducto.css'

function CrearProducto() {
  const navigate = useNavigate()
  
  // Actualizar el título de la página
  useEffect(() => {
    document.title = 'Crear Producto - Mueblería Jota'
    return () => {
      document.title = 'Mueblería Jota'
    }
  }, [])
  
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagenUrl: '',
    medidas: '',
    materiales: '',
    acabado: '',
    origen: 'Argentina'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(API_ENDPOINTS.productos, {
        ...formData,
        precio: Number(formData.precio),
        stock: Number(formData.stock)
      })
      navigate(`/productos/${response.data._id}`)
    } catch (err) {
      setError('Error al crear el producto. Por favor, intenta nuevamente.')
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05
      }
    }
  }

  const fieldVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <motion.div 
      className="crear-producto-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div 
          className="form-wrapper"
          variants={formVariants}
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Crear Nuevo Producto
          </motion.h1>

          <AnimatePresence>
            {error && (
              <motion.div 
                className="error-message"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form 
            onSubmit={handleSubmit} 
            className="producto-form"
            variants={formVariants}
          >
            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="nombre"
                whileHover={{ color: "#D4A437" }}
              >
                Nombre del Producto *
              </motion.label>
              <motion.input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="descripcion"
                whileHover={{ color: "#D4A437" }}
              >
                Descripción
              </motion.label>
              <motion.textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                rows="4"
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div className="form-row" variants={fieldVariants}>
              <motion.div className="form-group">
                <motion.label 
                  htmlFor="precio"
                  whileHover={{ color: "#D4A437" }}
                >
                  Precio *
                </motion.label>
                <motion.input
                  type="number"
                  id="precio"
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                  required
                  min="0"
                  whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div className="form-group">
                <motion.label 
                  htmlFor="stock"
                  whileHover={{ color: "#D4A437" }}
                >
                  Stock
                </motion.label>
                <motion.input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="imagenUrl"
                whileHover={{ color: "#D4A437" }}
              >
                URL de Imagen
              </motion.label>
              <motion.input
                type="url"
                id="imagenUrl"
                name="imagenUrl"
                value={formData.imagenUrl}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="medidas"
                whileHover={{ color: "#D4A437" }}
              >
                Medidas
              </motion.label>
              <motion.input
                type="text"
                id="medidas"
                name="medidas"
                value={formData.medidas}
                onChange={handleChange}
                placeholder="Ej: 180 × 45 × 75 cm"
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="materiales"
                whileHover={{ color: "#D4A437" }}
              >
                Materiales
              </motion.label>
              <motion.input
                type="text"
                id="materiales"
                name="materiales"
                value={formData.materiales}
                onChange={handleChange}
                placeholder="Ej: Nogal macizo FSC®, herrajes de latón"
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="acabado"
                whileHover={{ color: "#D4A437" }}
              >
                Acabado
              </motion.label>
              <motion.input
                type="text"
                id="acabado"
                name="acabado"
                value={formData.acabado}
                onChange={handleChange}
                placeholder="Ej: Aceite natural ecológico"
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <motion.label 
                htmlFor="origen"
                whileHover={{ color: "#D4A437" }}
              >
                Origen
              </motion.label>
              <motion.input
                type="text"
                id="origen"
                name="origen"
                value={formData.origen}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: "#D4A437" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div 
              className="form-actions"
              variants={fieldVariants}
            >
              <motion.button 
                type="button" 
                onClick={() => navigate('/productos')} 
                className="btn btn-outline"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <X size={18} />
                Cancelar
              </motion.button>
              <motion.button 
                type="submit" 
                disabled={loading} 
                className="btn btn-primary"
                variants={buttonVariants}
                whileHover={loading ? {} : "hover"}
                whileTap={loading ? {} : "tap"}
                animate={loading ? { scale: [1, 1.05, 1] } : {}}
                transition={loading ? { duration: 1, repeat: Infinity } : {}}
              >
                <Save size={18} />
                {loading ? 'Creando...' : 'Crear Producto'}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CrearProducto