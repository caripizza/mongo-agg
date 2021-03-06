const express = require('express');
const app = express();
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');


app.use(require('morgan')('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send(
    'Welcome to Cari\'s amazing Mongo-Agg App'
  );
});

app.use(notFound);
app.use(handler);

module.exports = app;
