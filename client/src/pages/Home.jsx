import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, MapPin, Zap, ArrowRight } from 'lucide-react'
import './Home.css'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const heroVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            variants={heroVariants}
          >
            <motion.h1 variants={itemVariants}>
              Muebles Sustentables con Diseño Atemporal
            </motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Creamos piezas únicas con madera certificada FSC® y materiales naturales.
              Diseño argentino, calidad duradera.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/productos" className="btn btn-primary">Ver Catálogo</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contacto" className="btn btn-outline">Contactanos</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div 
            className="features-grid"
            variants={containerVariants}
          >
            <motion.div 
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2,
                  y: -5
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Leaf size={32} />
              </motion.div>
              <h3>100% Sustentable</h3>
              <p>Madera certificada FSC®, materiales naturales y procesos eco-responsables</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2,
                  y: -5
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <MapPin size={32} />
              </motion.div>
              <h3>Diseño Argentino</h3>
              <p>Piezas únicas inspiradas en la naturaleza y cultura de Argentina</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2,
                  y: -5
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Zap size={32} />
              </motion.div>
              <h3>Calidad Premium</h3>
              <p>Artesanía experta y materiales de primera línea para máxima durabilidad</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="cta-content" variants={itemVariants}>
            <motion.h2 variants={itemVariants}>Descubrí Nuestra Colección</motion.h2>
            <motion.p variants={itemVariants}>Explorá nuestro catálogo completo de muebles sustentables</motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/productos" className="btn btn-secondary">
                Ver Todos los Productos
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home