const { db, User, AuthToken, Dashboard, Column, Item } = require('./models/db')

users = [
  {"email": "tom@gmail.com", "password": "tom_pass"},
  {"email": "pierre@gmail.com", "password": "pierre_pass"}
]

authTokens = [
  {"token": "tom_token", "userId": 1}
]

dashboards = [
  {
    "userId": 1,
    "name": "Maison",
    "cityId": 6454034,
    "cityName": "Montpellier"
  },
  {
    "userId": 1,
    "name": "Girlfriend",
    "cityId": 2147714,
    "cityName": "Sydney"
  },
  {
    "userId": 2,
    "cityId": 1609350,
    "cityName": "Bangkok"
  },
]

db.sync({ force: false })
.then(() => { Promise.all(users.map(user => User.create(user))) })
.then(() => { Promise.all(authTokens.map(authToken => AuthToken.create(authToken))) })
.then(() => { Promise.all(dashboards.map(dashboard => Dashboard.create(dashboard))) })
.then(() => { console.log('fixtures inserted <------------------') })
