const express = require("express");
const mediumRouter = express.Router();

mediumRouter.get("/", function (req, res) {
  res.send("Ruta clientes medium");
});

module.exports = mediumRouter;
