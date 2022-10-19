// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type:DataTypes.DECIMAL,
      allowNull:false,
      validate:{
        isNumeric:true
      }
    },
    stock:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1,
      validate:{
        isNumeric:true
      }
      
},
Category_id:{
  type:DataTypes.INTEGER,
  references:{
    model:"Category",
    key:"id"
  }

}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
