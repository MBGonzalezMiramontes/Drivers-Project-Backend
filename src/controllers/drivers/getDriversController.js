const { Driver, Team } = require("../../db");
const { Op } = require("sequelize");
const axios = require("axios");
const { formatApiDriverResponse } = require("../../utils/index");

const getDriversController = async () => {
  try {
    const dataFromDB = await Driver.findAll({
      include: {
        model: Team,
        attributes: ["name"],
      },
    });

    const url = "http://localhost:5000/drivers";
    const response = await axios.get(url);
    const dataFromApi = response.data.map(formatApiDriverResponse);

    return [...dataFromDB, ...dataFromApi];
  } catch (error) {
    throw error;
  }
};

const getDriversByName = async (name) => {
  try {
    const lowerCaseName = name.toLowerCase();
    const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

    const url = `http://localhost:5000/drivers`;
    const response = await axios.get(url);
    const dataFromApi = response.data
      .filter((driver) =>
        driver.name.forename.toLowerCase().includes(lowerCaseName)
      )
      .map(formatApiDriverResponse);

    const dataFromDB = await Driver.findAll({
      order: [["name", "ASC"]],
      where: condition,
      include: {
        model: Team,
        attributes: ["name"],
      },
      limit: 15,
    });

    const combinedResults = [...dataFromDB, ...dataFromApi];
    return combinedResults;
  } catch (error) {
    throw error;
  }
};

const driversById = async (id) => {
  try {
    if (!id) {
      throw new Error("ID no proporcionado");
    }

    let driver = null;

    // Verificar si el ID es un UUID válido
    const isUUID =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id
      );

    if (isUUID) {
      // Buscar en la base de datos por UUID
      driver = await Driver.findByPk(id, {
        include: {
          model: Team,
        },
      });
    } else {
      // Buscar en la API por número entero
      const apiUrl = `http://localhost:5000/drivers/${id}`;
      const response = await axios.get(apiUrl);
      driver = response.data;

      driver = formatApiDriverResponse(driver);
    }

    if (!driver) {
      throw new Error("Conductor no encontrado");
    }

    return driver;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDriversController,
  getDriversByName,
  driversById,
};
