const requestData = require('./controller/requestsData');

let renderHome = function (app) {
  app.get('/home', (req, res) => {
    res.render('home');
  });

  app.get('/', (req, res) => {
    requestData.getArrayData((err, result) => {
      res.render('home', {
        longEU: result[0].longPositions,
        shortEU: result[0].shortPositions,
        longUC: result[1].longPositions,
        shortUC: result[1].shortPositions,
        longEJ: result[2].longPositions,
        shortEJ: result[2].shortPositions,
        longUCH: result[3].longPositions,
        shortUCH: result[3].shortPositions,
      });
    });
  });

  app.post('/subscribe', (req, res) => {
    //let email = req.body.emailUser;
    res.render('conferma');
  });
};

module.exports.renderHome = renderHome;
