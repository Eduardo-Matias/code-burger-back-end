const { sq } = require('../../config/db')
const { DataTypes } = require('sequelize')

const Category = sq.define('categories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
    path: {
    type: DataTypes.STRING,
    allowNull: false
  },
    url: {
    type: DataTypes.VIRTUAL,
    get() {
      return `http://localhost:3001/category-file/${this.path}`
    }
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  }
}
)

module.exports = Category
