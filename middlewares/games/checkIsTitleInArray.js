const checkIsTitleInArray = (req, res, next) => {
    req.isNew = !Boolean(req.games.find((item) => item.title === req.body.title));
    next();
};

module.exports = checkIsTitleInArray;
