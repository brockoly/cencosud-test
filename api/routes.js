const index = require('./routes/index');
const houses = require('./routes/houses');
const character = require('./routes/character');

module.exports = (app) => {
  app.use('/', index);
  app.use('/character', character);
  app.use('/houses', houses);

  app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found.' });
    next();
  });
};
