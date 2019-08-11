module.exports = (db, Sequelize) => {
  return db.define('openWeatherCity', {
    id:   { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    country: { type: Sequelize.STRING, allowNull: false },
    coordLon: { type: Sequelize.DOUBLE, allowNull: false },
    coordLat: { type: Sequelize.DOUBLE, allowNull: false }
  })
}