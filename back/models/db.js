const config = require('../config');
const logger = require('pino')()
const Sequelize = require('sequelize');

const db = new Sequelize(config.DB, {})

const AuthToken = require('./auth_token')(db, Sequelize)
const User = require('./user')(db, Sequelize)
const Dashboard = require('./dashboard')(db, Sequelize)

AuthToken.belongsTo(User)
Dashboard.belongsTo(User)
User.hasMany(Dashboard, { onDelete: 'CASCADE' })

module.exports = {
  db,
  User,
  AuthToken,
  Dashboard,
}
