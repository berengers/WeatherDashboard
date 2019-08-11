const { db, User, UserParams, AuthToken, City } = require('./models/db')

const users = [
  {"email": "tom@gmail.com", "password": "tom_pass"},
  {"email": "pierre@gmail.com", "password": "pierre_pass"}
]

const userParams = [
  {
    "userId": 1,
    "lang": "fr",
    "unit": "metric"
  },
  {
    "userId": 2,
    "lang": "en",
    "unit": "imperial"
  }
]

const authTokens = [
  {"token": "tom_token", "userId": 1}
]

const cities = [
  {
    "userId": 1,
    "name": "Maison",
    "openWeatherId": 6454034,
    "openWeatherName": "Montpellier"
  },
  {
    "userId": 1,
    "name": "Girlfriend",
    "openWeatherId": 2147714,
    "openWeatherName": "Sydney"
  },
  {
    "userId": 2,
    "openWeatherId": 1609350,
    "openWeatherName": "Bangkok"
  },
]

db.sync({ force: false })
.then(() => { Promise.all(users.map(user => User.create(user))) })
.then(() => { Promise.all(userParams.map(params => UserParams.create(params))) })
.then(() => { Promise.all(authTokens.map(authToken => AuthToken.create(authToken))) })
.then(() => { Promise.all(cities.map(city => City.create(city))) })
.then(() => { console.log('fixtures inserted <------------------') })
