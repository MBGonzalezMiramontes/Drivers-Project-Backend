const { Router } = require("express");
const {
  getTeamsHandler,
} = require("../handlers/teams/getTeamsHandler");

const teamsRouter = Router();

teamsRouter.get("/teams", getTeamsHandler);

module.exports = teamsRouter;
