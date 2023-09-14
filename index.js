//const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const {
  getDriversController,
} = require("./src/controllers/drivers/getDriversController");
const { TeamAPI_toDB } = require("./src/controllers/teams/getTeamsController");

conn
  .sync({ force: true })
  .then(async () => {
    await getDriversController();
    await TeamAPI_toDB();

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
