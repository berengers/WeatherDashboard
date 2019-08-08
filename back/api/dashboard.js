const { logged } = require('./utils')
const { Dashboard } = require('../models/db')


function getDashboards(req, res) {
  Dashboard.findAll({ where: { userId: req.user.id } })
  .then(dashs => {
    res.json(dashs)
  })
  .catch(error => {
    res.statusCode = 404
    res.json(error)
  })
}


function getDashboard(req, res) {
  Dashboard.findOne({ where: { id: req.params.id, userId: req.user.id }})
    .then(dash => {
      if (dash)
        res.json(dash)
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

async function newDashboard(req, res) {
  const { cityId, cityName } = req.body

  Dashboard.create({ "cityId": cityId, "cityName": cityName, "userId": req.user.id })
    .then(dash => {
      res.json(dash)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
  
}

function deleteDashboard(req, res) {
  Dashboard.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then(dash => {
      dash.destroy()
      res.json('')
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}

function updateDashboard(req, res) {
  const { name, cityId, cityName } = req.body

  Dashboard.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then(dash => {

      dash.name     && (dash.name = name)
      dash.cityId   && (dash.cityId = cityId)
      dash.cityName && (dash.cityName = cityName)

      dash.save()
      res.json(dash)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getDashboards))
  app.get(prefix + '/:id', logged(getDashboard))
  app.post(prefix, logged(newDashboard))
  app.delete(prefix + '/:id', logged(deleteDashboard))
  app.put(prefix + '/:id', logged(updateDashboard))
}