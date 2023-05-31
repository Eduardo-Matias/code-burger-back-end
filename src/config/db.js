const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('codeburger', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
})

const testDbConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testDbConnection()

module.exports = { sq: sequelize, testDbConnection }
