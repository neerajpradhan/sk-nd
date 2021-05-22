const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log('Logging:', method, url, time.toLocaleDateString());
    next();
}

module.exports = logger;