const express = require("express");
const premiumRouter = express.Router();

premiumRouter.get("/", function (req, res) {
  res.send("Ruta clientes premium");
});

module.exports = premiumRouter;
