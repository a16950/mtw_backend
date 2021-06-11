var express = require('express');
var ctrl = require('./controller');
var EvaluationComponentRouter = require('./evaluation-component');

function CourseRouter() {
  var router = express.Router();

  router.route('/')
  .get(ctrl.findAll)
  .post(ctrl.create);


  router.route('/:courseId')
  .delete(ctrl.removeById)
  .get(ctrl.findById)
  .put(ctrl.updateById);

  router.use('/:courseId/evaluation-components', EvaluationComponentRouter)

  return router;
}

module.exports = CourseRouter();