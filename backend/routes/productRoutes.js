const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let producto;
    
    // Intentar buscar por slug primero, luego por ID
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      // Es un ObjectId válido
      producto = await Product.findById(identifier);
    } else {
      // Es un slug
      producto = await Product.findOne({ slug: identifier });
    }
    
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const producto = new Product(req.body);

  try {
    const nuevoProducto = await producto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        producto[key] = req.body[key];
      }
    });

    const productoActualizado = await producto.save();
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
