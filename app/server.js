const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const dbo = require("./config/conn");

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.use("/api", routes);

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
