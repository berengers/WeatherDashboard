module.exports = (db, Sequelize) => {
  return db.define('auth_token', {
    id:     { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    token:  { type: Sequelize.STRING, allowNull: false, unique: true }
  })
}
