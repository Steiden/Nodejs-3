const deleteGame = (req, res, next) => {
    const id = req.game.id;
    const index = req.games.findIndex((item) => item.id === id);
    req.games.splice(index, 1);
    next();
};

module.exports = deleteGame;
