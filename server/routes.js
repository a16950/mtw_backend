var express = require('express');
var coursesRouter = require('./controllers/course');

function initialize() {
  var router = express.Router();

  router.use('/courses', coursesRouter);

  return router;
}

module.exports = { initialize };
