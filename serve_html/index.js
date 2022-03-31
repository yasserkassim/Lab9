const port = 3000,
    homeController = require("./controllers/homeController"),
    express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/home", homeController.sendReqParam);
app.get("/images/:image", homeController.respondWithImage);
app.get("/lab9", homeController.sendReqParam);

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});
app.use(express.json());
app.use(homeController.respondNoResourceFound);
app.use(homeController.respondInternalError);

app.post("/", (req, res) => {
    
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});
app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
})