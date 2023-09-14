const formatApiDriverResponse = (apiDriver) => {
  return {
    id: apiDriver.id,
    name: apiDriver.name.forename,
    lastname: apiDriver.name.surname,
    description:
      apiDriver.description || "Información de conductores no disponible.",
    image:
      apiDriver.image?.url ||
      "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png",
    nationality: apiDriver.nationality,
    dob: apiDriver.dob,
    teams: apiDriver.teams,
    created: false,
  };
};

module.exports = {
  formatApiDriverResponse,
};
