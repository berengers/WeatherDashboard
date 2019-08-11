const { logged } = require('./utils')
const { OpenWeatherCity } = require('../models/db')
const Sequelize = require('sequelize');


function getCities(req, res) {
  const { searchText, limit } = req.query

  OpenWeatherCity.findAll({
    where: { name: { [Sequelize.Op.like]: searchText+'%'} },
    attributes: ['id', 'name', 'country'],
    order: [['name', 'ASC']],
    limit: limit || 5
  })
    .then(cities => {
      res.json(cities)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getCities))
}