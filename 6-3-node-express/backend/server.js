// TODO 1: Import and Create express app instance
const express = require("express");
const app = express();

// TODO 2: Define server port
const PORT = 3000;

// TODO 4: Import and Apply CORS middleware
const cors = require("cors");
app.use(cors());

// TODO 5: Import and apply Morgan middleware
const morgan = require("morgan");
app.use(morgan("dev"));

const { getRandomQuote } = require("./quotes");

// TODO 6.1: Create root route "/"


// TODO 6.2: Create "/api/quote" route


// TODO 7: Start server using app.listen
