const { sq } = require('../../config/db')
const { DataTypes } = require('sequelize')
const Category = require('./Category')

const Product = sq.define('create-products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  offer: {
    type: DataTypes.BOOLEAN
  },
  url: {
    type: DataTypes.VIRTUAL,
    get() {
      return `http://localhost:3001/product-file/${this.path}`
    }
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }

})

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
})


module.exports = Product
