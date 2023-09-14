const { Driver, Team } = require("../../db");
const { Op } = require("sequelize");

const createDriverController = async (
  name,
  lastname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  try {
    // Verificar si el conductor ya existe
    const existingDriver = await Driver.findOne({
      where: {
        name,
        lastname,
      },
    });

    if (existingDriver) {
      return {
        error: "El conductor ya existe en la base de datos",
      };
    }

    const associatedTeams = await Team.findAll({
      where: {
        name: {
          [Op.or]: teams.map((team) => ({
            [Op.iLike]: team,
          })),
        },
      },
    });

    if (associatedTeams.length === 0) {
      return {
        error: "Ningún equipo asociado encontrado.",
      };
    }

    const newDriver = await Driver.create({
      name,
      lastname,
      description,
      image,
      nationality,
      dob,
      teams,
      created: true,
    });

    await newDriver.addTeam(associatedTeams);

    const driver = await Driver.findByPk(newDriver.id, {
      include: {
        model: Team,
      },
    });

    const filteredTeams = driver.Teams.map((team) => {
      const { Driver_Team, ...teamData } = team.toJSON();
      return teamData;
    });
    await newDriver.save();
    return {
      ...driver.toJSON(),
      teams: filteredTeams,
    };
  } catch (error) {
    return {
      error: error.message || "Se produjo un error al crear el conductor.",
    };
  }
};

module.exports = { createDriverController };
