const {
  createDriverController,
} = require("../../controllers/drivers/postDriverController");

const createDriverHandler = async (req, res) => {
  try {
    const {
      name,
      lastname,
      description,
      image,
      nationality,
      dob,
      teams,
      created,
    } = req.body;

    if (!name || !lastname || !description || !nationality || !dob || !teams) {
      return res.status(400).json({
        error: "Faltan datos obligatorios para crear un conductor.",
      });
    }

    const response = await createDriverController(
      name,
      lastname,
      description,
      image,
      nationality,
      dob,
      teams,
      created
    );

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createDriverHandler };
