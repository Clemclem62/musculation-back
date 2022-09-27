const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
    origin: "htpp://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes/fruits.routes")(app);
require("./app/routes/legumes.routes")(app);


//app.use("/", routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
