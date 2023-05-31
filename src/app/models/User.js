const { sq } = require('../../config/db')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const User = sq.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.VIRTUAL,
    allowNull: false
  },
  password_hash: {
    type: DataTypes.STRING
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  created_at: {
    type: DataTypes.DATE

  },
  updated_at: {
    type: DataTypes.DATE
  }

}
)

User.addHook('beforeSave', async (user) => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 10)
  }
})

User.sync().then(() => {
  console.log('User Model synced')
})

module.exports = User
