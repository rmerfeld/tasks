const logger = (req, res, next) => {
    console.log('logger in request-response-cycle.');
    console.log(req.path);
    next();
}

module.exports = logger;