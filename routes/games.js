// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const { sendAllGames, deleteGame, addGameController } = require("../controllers/game");
const { getAllGames } = require('../middlewares/games');

gamesRouter.get("/games", getAllGames, sendAllGames)
gamesRouter.delete("/games/:id", getAllGames, deleteGame);
gamesRouter.post("/games", getAllGames, addGameController)

module.exports = gamesRouter;
