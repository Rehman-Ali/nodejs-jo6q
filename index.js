const http = require('http');
const PORT = 3000;
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());


// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/", require("./routes/index"));




const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
