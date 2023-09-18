const express = require('express')
const app = express()

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

const mediumRouter = require('./medium-clients')
const premiumRouter = require('./premium-clients')

app.use('/medium-clients', mediumRouter);
app.use('/premium-clients', premiumRouter);

module.exports = app;
