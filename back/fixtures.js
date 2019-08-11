const { db, User, UserParams, AuthToken, City, OpenWeatherCity } = require('./models/db')
const fs = require('fs')

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
    "openWeatherCityId": 707860,
  },
  {
    "userId": 1,
    "name": "Girlfriend",
    "openWeatherCityId": 519188,
  },
  {
    "userId": 2,
    "openWeatherCityId": 1283378,
  },
]

const cityFile = fs.readFileSync("static/city.list.json")
const cityList = JSON.parse(cityFile)

const mapCityList = cityList.map((city, index) => {
  return {
    id: city.id,
    name: city.name,
    country: city.country,
    coordLon: city.coord.lon,
    coordLat: city.coord.lat
  }
})


db.sync({ force: false })
.then(() => { Promise.all(users.map(user => User.create(user))) })
.then(() => { Promise.all(userParams.map(params => UserParams.create(params))) })
.then(() => { Promise.all(authTokens.map(authToken => AuthToken.create(authToken))) })
.then(() => { Promise.all(mapCityList.map((city) => {OpenWeatherCity.create(city)})) }) // Have to up max old space size size with > "node --max-old-space-size=5000 ./fixtures.js"
.then(() => { Promise.all(cities.map(city => City.create(city))) })
.then(() => { console.log('fixtures inserted <------------------') })