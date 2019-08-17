const { logged } = require('./utils')
const { User, UserParams, City } = require('../models/db')


function getUser(req, res) {
  User.findOne({
    where: { id: req.user.id },
    include: [{ model: UserParams }, { model: City }],
  })
    .then(user => {
      if (user){
        const returnUser = {
          email: user.email,
          userParam: user.userParam,
          cities: user.cities
        }
        res.json(returnUser)
      }
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

function newUser(req, res) {
  console.log('111111111111111 ---->', 111111111111111)
  const { email, password } = req.body

  User.create({ email, password })
    .then(() => {
      res.json()
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
  
}

function deleteUser(req, res) {
  User.findOne({ where: { id: req.user.id } })
    .then(user => {
      user.destroy()
      res.json()
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}

function updateUser(req, res) {
  const { email, password, lang, unit } = req.body
  User.findOne({ where: { id: req.user.id } })
    .then(user => {
      email && (user.email = email)
      password && (user.password = password)
      lang && (user.lang = lang)
      unit && (user.unit = unit)

      user.save()
      res.json()
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getUser))
  app.post(prefix, logged(newUser))
  app.delete(prefix, logged(deleteUser))
  app.put(prefix, logged(updateUser))
}