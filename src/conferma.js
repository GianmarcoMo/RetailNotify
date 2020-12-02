let renderConferma = function (app) {
  app.get('/conferma', (req, res) => {
    res.render('conferma');
  });
};

module.exports.renderConferma = renderConferma;
