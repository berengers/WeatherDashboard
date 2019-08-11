const { logged } = require('./utils')
const { UserParams } = require('../models/db')


function getParams(req, res) {
  UserParams.findOne({ where: { userId: req.user.id } })
    .then(params => {
      res.json(params)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}


function updateUserParams(req, res) {
  const { lang, unit, humidity, pressure, wind } = req.body
  UserParams.findOne({ where: { userId: req.user.id } })
    .then(params => {
      lang && (params.lang = lang)
      unit && (params.unit = unit)
      req.body.hasOwnProperty('humidity') && (params.humidity = humidity)
      req.body.hasOwnProperty('pressure') && (params.pressure = pressure)
      req.body.hasOwnProperty('wind') && (params.wind = wind)

      params.save()
      res.json()
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getParams))
  app.put(prefix, logged(updateUserParams))
}