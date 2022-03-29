const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const dbo = require("./config/conn");
require("dotenv").config();
var cors = require('cors')


var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.use("/", routes);

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }

    // start the Express server
    app.listen(3000, () => {
        console.log(`Server is running on port: 3000`);
    });
});

module.exports = {
    app,
};
