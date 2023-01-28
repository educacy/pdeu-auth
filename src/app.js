require('dotenv').config();
const express = require('express');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const cors = require('cors');
const supertokens = require("supertokens-node");
const { middleware, errorHandler } = require("supertokens-node/framework/express");
const middlewares = require('./middlewares');

const app = express();

supertokens.init(require("../config/supertoken"));

app.use(express.json());
// app.use(
//   cors({
//       origin: "http://localhost:3000",
//       allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
//       methods: ["GET", "PUT", "POST", "DELETE"],
//       credentials: true,
//   })
// );
app.use(middleware());
app.use(errorHandler())

// your own error handler
// app.use((err, req, res, next) => { /* ... */ });
// app.use(morgan('dev'));
// app.use(helmet());
// app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


module.exports = app;
