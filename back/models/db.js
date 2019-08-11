const config = require('../config');
const Sequelize = require('sequelize');

const db = new Sequelize(config.DB, {})

const AuthToken = require('./auth_token')(db, Sequelize)
const User = require('./user')(db, Sequelize)
const UserParams = require('./userParams')(db, Sequelize)
const City = require('./city')(db, Sequelize)
const OpenWeatherCity = require('./openWeatherCity')(db, Sequelize)

AuthToken.belongsTo(User)
City.belongsTo(User)
User.hasMany(City, { onDelete: 'CASCADE' })
UserParams.belongsTo(User)
User.hasOne(UserParams, { onDelete: 'CASCADE' })
OpenWeatherCity.hasMany(City)

module.exports = {
  db,
  User,
  UserParams,
  AuthToken,
  City,
  OpenWeatherCity
}
