const { writeData } = require("../../utils/data");

const updateGamesFile = async (req, res, next) => {
    await writeData("./data/games.json", req.games);
    next();
};

module.exports = updateGamesFile;
