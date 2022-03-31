exports.sendReqParam = (req, res) => {
    let path = req.url;
    if (path == '/home'){
        res.render("home");
    }
    else if (path == '/lab9'){
        res.sendFile(`./public/css/${path}.css`, {
            root: "./"
        })
    }
};
exports.respondWithImage = (req, res) => {
    let image = req.params.image;
    res.render(image);
};


const httpStatus = require("http-status-codes");
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
};
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`)
};