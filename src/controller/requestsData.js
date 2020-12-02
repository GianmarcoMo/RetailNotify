//  file .env to store email and password to do request
require('dotenv').config();

const https = require('https');

let importantExchanges = [];

//  Get the sessionId to future request
function getSessionId(callback) {
  //  Static variable used to do a API request once time
  if (typeof getSessionId.sessionId == 'undefined') {
    https.get(
      'https://www.myfxbook.com/api/login.json?email=' +
        process.env.EMAIL +
        '&password=' +
        process.env.PASSWORD,
      (res) => {
        res.on('data', (data) => {
          //  Passing sessionId to homePage
          callback(null, (getSessionId.sessionId = JSON.parse(data).session));
        });
      }
    );
  } else {
    //  Passing sessionId got in previous request
    callback(null, getSessionId.sessionId);
  }
}

function getArrayData(callback) {
  callback(null, importantExchanges);
}

function getExchangeData() {
  //  get the session id it will come use to get the data
  getSessionId((err, risultato) => {
    let allData = [];
    let url =
      'https://www.myfxbook.com/api/get-community-outlook.json?session=' +
      risultato;
    //  request data from website
    https.get(url, (res) => {
      res
        .on('data', (data) => {
          //  Get the object from request
          allData.push(data);
        })
        .on('end', () => {
          let data = Buffer.concat(allData);
          let parser = JSON.parse(data);

          console.log("!!! Prendo i dati, 1 volta all'ora !!!");
          importantExchanges.push(parser.symbols[0]);
          importantExchanges.push(parser.symbols[4]);
          importantExchanges.push(parser.symbols[6]);
          importantExchanges.push(parser.symbols[28]);
        });
    });
  });
}

//  update contracts every 1 hours
setInterval(function () {
  getExchangeData();
}, 3600000);

module.exports.getArrayData = getArrayData;
module.exports.getExchangeData = getExchangeData;
