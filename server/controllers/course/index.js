var express = require('express');
var ctrl = require('./controller');
var EvaluationComponentRouter = require('./evaluation-component');
var ClassRouter = require('./class');

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

  router.use('/:courseId/classes', ClassRouter)

  router.use('/:componentId/criteria', CriteriaRouter)

  return router;
}

module.exports = CourseRouter();