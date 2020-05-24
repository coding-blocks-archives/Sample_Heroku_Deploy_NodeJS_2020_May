const Sequelize = require('sequelize')

let db;

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL)
} else {
  db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
  })
}

const Tasks = db.define('task', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  priority: {
    type: Sequelize.DataTypes.ENUM('high', 'low', 'normal'),
    defaultValue: 'normal'
  }
})

module.exports = {
  db, Tasks
}