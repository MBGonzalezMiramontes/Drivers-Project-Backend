const { Router } = require("express");
const { getDriversHandler } = require("../handlers/drivers/getDriversHandler");
const { getDetailsHandler } = require("../handlers/drivers/getDetailsHandler");
const { createDriverHandler } = require("../handlers/drivers/postDriverHandler");

const driversRouter = Router();

driversRouter
  .get("/drivers", getDriversHandler)
  .get("/drivers/:id", getDetailsHandler)
  .post("/drivers", createDriverHandler)

module.exports = driversRouter;
