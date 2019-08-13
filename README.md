# Weather Dashboard

This weather dashboard allows you visualize weather of several cities of your choice.

## Getting Started

To install this application on your desktop, you will need to have node installed.

Start by cloning the project:
```
git clone git@github.com:berengers/WeatherDashboard.git
```
or in https with 
```
git clone https://github.com/berengers/WeatherDashboard.git
```


### Installing

Install back-end dependencies :

```
cd WeatherDashboard/back
npm install
```

First, you can create a database or recover a backup in files, which will be much faster.


### Recover or Create and start database

#### recover database
You can recover the "app backup.db" file in WeatherDashboard\back\static
Put this file in your "tmp" folder for Linux. If you choose another location, edit the configuration file.
Rename file to app.db.

Then :
```
node app.js
```


#### create database

```
node app.js
node --max-old-space-size=5000 ./fixtures.js
node app.js
```
"--max-old-space-size" expends the available space for fixtures.

### Api key

To use this application you need to have an API key from https://openweathermap.org/api.
Create a .env file in the front folder.
Its content must be: 
```
WEATHER_APIKEY=<API_key>
```

### Start Front

Then in an other shell, to start the front-end dev server:

```
cd WeatherDashboard/front
npm install
npm start
```

Finally, open your brower at http://localhost:8080

### Login

You can login with this account:
```
email: tom@gmail.com
password: tom_pass
```