const dotenv = require('dotenv').config()
const express = require('express')
var cors = require('cors')
const apiRoutes = require('./routes/api')

const app = express();
const port = 3007;
const connection = require('./database')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/', apiRoutes)

app.all('*', (req, res, next) => {
    res.status(404).json({
      success: false,
      message: `Can't find ${req.originalUrl} on this server`
    })
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });