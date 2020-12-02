const express = require('express');
const home = require('./src/home');
const body_parser = require('body-parser');
const https = require('https');
const requestData = require('./src/controller/requestsData');
const app = express();

app.use(body_parser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3001, () => {
  console.log('Server avviato!');
  requestData.getExchangeData();
});

//  Ogni 25 minuti invia una richiesta al server
setInterval(function () {
  wakeUp();
}, 1500000);

//  Funzione per 'svegliare' il server
function wakeUp() {
  https.get('https://incrocio.herokuapp.com/', (res) => {
    console.log('WAKE UP');
  });
}

home.renderHome(app);
