const { logged } = require('./utils')
const { City } = require('../models/db')


function getCities(req, res) {
  City.findAll({ where: { userId: req.user.id } })
  .then(cities => {
    res.json(cities)
  })
  .catch(error => {
    res.statusCode = 404
    res.json(error)
  })
}


function getCity(req, res) {
  City.findOne({ where: { id: req.params.id, userId: req.user.id }})
    .then(city => {
      if (city)
        res.json(city)
      else {
        res.statusCode = 404
        res.json()
      }
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}

function newCity(req, res) {
  const { openWeatherId, openWeatherName } = req.body

  City.create({ openWeatherId, openWeatherName, userId: req.user.id })
    .then(city => {
      res.json(city)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
  
}

function deleteCity(req, res) {
  City.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then(city => {
      city.destroy()
      res.json()
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}

function updateCity(req, res) {
  const { name, openWeatherId, openWeatherName } = req.body

  City.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then(city => {
      name && (city.name = name)
      openWeatherId && (city.openWeatherId = openWeatherId)
      openWeatherName && (city.openWeatherName = openWeatherName)

      city.save()
      res.json(city)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getCities))
  app.get(prefix + '/:id', logged(getCity))
  app.post(prefix, logged(newCity))
  app.delete(prefix + '/:id', logged(deleteCity))
  app.put(prefix + '/:id', logged(updateCity))
}