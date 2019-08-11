module.exports = (db, Sequelize) => {
  return db.define('userParams', {
    id:       { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    lang:     { type: Sequelize.STRING, allowNull: false, defaultValue: "en" },
    unit:     { type: Sequelize.STRING, allowNull: false, defaultValue: "imperial" },
    humidity: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    pressure: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    wind:     { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
  })
}
