const { Team } = require("../../db");
const axios = require("axios");

// Función para obtener equipos únicos de una lista de conductores
const extractUniqueTeams = (drivers) => {
  const teamsAPI = drivers
    .flatMap((driver) => (driver.teams ? driver.teams.split(",") : []))
    .map((team) => team.trim())
    .filter((team, index, self) => self.indexOf(team) === index);
  return teamsAPI;
};

// Función para obtener equipos de la API y almacenarlos en la DB
const fetchAndStoreTeamsFromAPI = async () => {
  try {
    const url = "http://localhost:5000/drivers";
    const response = await axios.get(url);
    const teamsAPI = extractUniqueTeams(response.data);

    // Utiliza bulkCreate para insertar múltiples registros en la DB.
    await Team.bulkCreate(
      teamsAPI.map((name) => ({ name })),
      {
        ignoreDuplicates: true,
      }
    );

    return teamsAPI;
  } catch (error) {
    throw new Error("Error al obtener y almacenar equipos desde la API.");
  }
};

const TeamAPI_toDB = async () => {
  // Obtiene todos los equipos de la DB
  const teamsDB = await Team.findAll();

  // Si no hay equipos en la DB, obtiene los datos de la API y los inserta
  if (teamsDB.length === 0) {
    return fetchAndStoreTeamsFromAPI();
  }

  return teamsDB;
};

const getTeamsController = async () => {
  const teams = await Team.findAll({
    order: [["name", "ASC"]],
  });

  return teams;
};

module.exports = {
  TeamAPI_toDB,
  getTeamsController,
};
