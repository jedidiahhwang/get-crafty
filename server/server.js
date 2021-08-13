const express = require("express");

const path = require("path");

const app = express();

app.use(express.json);

app.listen(5005, () => console.log("Server is ready on port 5005"));