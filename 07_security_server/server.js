const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const winston = require("winston"); // advanced logger
const helmet = require("helmet");

const bodyParser = require("body-parser");
const app = express();

app.use(helmet());
app.use(cors()); // cors error workaround in browser
app.use(bodyParser.json());
// app.use(morgan("combined")); // morgan does logging in console

app.get("/", (request, response) => {
  response.cookie("session", "1", { httpOnly: true });
  response.cookie("session", "1", { secure: true });
  response.set({
    "Content-Security-Policy": "script-src 'self' https://apis.google.com ",
  });
  response.send("Hello Server!");
});

app.post("/secret", (request, response) => {
  const { userInput } = request.body;
  if (userInput) {
    winston.log("info", userInput);
    response.status(200).json("success");
  } else {
    winston.error("something is not right");
    response.status(400).json("incorrect submission");
  }
});

app.listen(3000, () => {
  console.log("Example server is listening on port 3000.");
});
