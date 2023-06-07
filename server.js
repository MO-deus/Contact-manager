
const express = require("express");
const dotenv = require("dotenv").config();
const ErrHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 3000;

// middlewares

// used for parsing the stream of body
app.use(express.json());
app.use("/api/contacts", require("./routes/ContactRoutes"));

// middleware for error handling
app.use(ErrHandler);

app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
});


