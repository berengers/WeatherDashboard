module.exports = (db, Sequelize) => {
  return db.define('city', {
    id:   { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, defaultValue: "" },
    openWeatherId: { type: Sequelize.INTEGER, allowNull: false },
    openWeatherName: { type: Sequelize.STRING, allowNull: false }
  })
}
