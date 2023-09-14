const {
  driversById,
} = require("../../controllers/drivers/getDriversController");

const getDetailsHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await driversById(id);
    return res.status(200).json(response);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: "Conductor no encontrado" });
    }
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDetailsHandler,
};
