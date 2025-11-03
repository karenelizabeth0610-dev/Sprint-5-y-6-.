import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Package, Mail, Plus } from 'lucide-react'
import './Header.css'

function Header() {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const linkVariants = {
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header 
      className="header"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <nav className="navbar">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className="logo">
              <motion.div 
                className="logo-icon"
                whileHover={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.6 }}
              >
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                  <path d="M15 10C15 10 15 45 15 60C15 75 25 85 40 85C55 85 65 75 65 60C65 45 65 10 65 10" fill="#A0522D"/>
                  <circle cx="75" cy="25" r="10" fill="#A0522D"/>
                  <rect x="70" y="40" width="20" height="35" rx="5" fill="#A0522D"/>
                  <circle cx="40" cy="65" r="8" fill="#F5E6D3"/>
                </svg>
              </motion.div>
              <span>Mueblería Jota</span>
            </Link>
          </motion.div>
          <ul className="nav-links">
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/">
                <Home size={18} />
                <span>Inicio</span>
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/productos">
                <Package size={18} />
                <span>Productos</span>
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/contacto">
                <Mail size={18} />
                <span>Contacto</span>
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <Link to="/admin/crear-producto" className="admin-link">
                <Plus size={18} />
                <span>Admin</span>
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header