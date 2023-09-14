const { Router } = require("express");
const driversRouter = require("./driversRouter.js");
const teamsRouter = require("./teamsRouter.js");

const router = Router();

router
.use(driversRouter)
.use(teamsRouter);

module.exports = router;
