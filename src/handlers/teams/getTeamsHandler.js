const {
  getTeamsController,
} = require("../../controllers/teams/getTeamsController");

const getTeamsHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getTeamsController(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getTeamsHandler };
