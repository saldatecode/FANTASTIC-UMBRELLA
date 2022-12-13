const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 12.99,
    stock: 32,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 33,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 23.99,
    stock: 23,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 19.99,
    stock: 64,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 33.99,
    stock: 32,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
