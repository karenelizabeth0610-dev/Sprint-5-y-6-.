import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react'
import './Contacto.css'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({
        nombre: '',
        correo: '',
        mensaje: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
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

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="contacto-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div 
          className="page-header"
          variants={itemVariants}
        >
          <h1>Contactanos</h1>
          <p>¿Tenés alguna consulta sobre nuestros productos? Escribinos y te responderemos a la brevedad.</p>
        </motion.div>

        <div className="contacto-wrapper">
          <motion.div 
            className="contacto-info"
            variants={itemVariants}
          >
            <motion.div 
              className="info-section"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Información de Contacto</h3>
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={20} />
                <div>
                  <strong>Email:</strong>
                  <span>info@muebleriajota.com.ar</span>
                </div>
              </motion.div>
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={20} />
                <div>
                  <strong>Teléfono:</strong>
                  <span>+54 11 1234-5678</span>
                </div>
              </motion.div>
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Clock size={20} />
                <div>
                  <strong>Horario:</strong>
                  <span>Lun - Vie: 9:00 - 18:00</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="info-section sustainability"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Comprometidos con el Ambiente</h3>
              <p>Todos nuestros muebles están fabricados con madera certificada FSC® y materiales sustentables.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="contacto-form-wrapper"
            variants={formVariants}
          >
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={24} />
                  ¡Gracias por contactarnos! Responderemos tu mensaje pronto.
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="contacto-form">
              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="nombre">Nombre *</label>
                <motion.input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={errors.nombre ? 'error' : ''}
                  whileFocus={{ scale: 1.02, borderColor: "#87A96B" }}
                  transition={{ duration: 0.2 }}
                />
                <AnimatePresence>
                  {errors.nombre && (
                    <motion.span 
                      className="error-text"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.nombre}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="correo">Correo Electrónico *</label>
                <motion.input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className={errors.correo ? 'error' : ''}
                  whileFocus={{ scale: 1.02, borderColor: "#87A96B" }}
                  transition={{ duration: 0.2 }}
                />
                <AnimatePresence>
                  {errors.correo && (
                    <motion.span 
                      className="error-text"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.correo}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="mensaje">Mensaje *</label>
                <motion.textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="6"
                  className={errors.mensaje ? 'error' : ''}
                  whileFocus={{ scale: 1.02, borderColor: "#87A96B" }}
                  transition={{ duration: 0.2 }}
                />
                <AnimatePresence>
                  {errors.mensaje && (
                    <motion.span 
                      className="error-text"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.mensaje}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contacto