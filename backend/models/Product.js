const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true
  },
  descripcion: {
    type: String
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 10
  },
  imagenUrl: {
    type: String
  },
  medidas: {
    type: String
  },
  materiales: {
    type: String
  },
  acabado: {
    type: String
  },
  origen: {
    type: String,
    default: 'Argentina'
  },
  peso: {
    type: String
  },
  capacidad: {
    type: String
  },
  modulares: {
    type: String
  },
  tapizado: {
    type: String
  },
  confort: {
    type: String
  },
  rotacion: {
    type: String
  },
  garantia: {
    type: String
  },
  carga_maxima: {
    type: String
  },
  almacenamiento: {
    type: String
  },
  caracteristicas: {
    type: String
  },
  colchon: {
    type: String
  },
  estructura: {
    type: String
  },
  relleno: {
    type: String
  },
  sostenibilidad: {
    type: String
  },
  extension: {
    type: String
  },
  apilables: {
    type: String
  },
  incluye: {
    type: String
  },
  cables: {
    type: String
  },
  regulacion: {
    type: String
  },
  certificacion: {
    type: String
  }
}, {
  timestamps: true
});

// Middleware para generar slug automáticamente
productSchema.pre('save', function (next) {
  if (this.isModified('nombre') || this.isNew) {
    this.slug = this.nombre
      .toLowerCase()
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/ñ/g, 'n')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
