var express = require('express');
var ctrl = require('./controller');
var EvaluationComponentRouter = require('./evaluation-component');
var CriteriaRouter = require('./criteria');
var StudentRouter = require('./student');

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

  router.use('/:courseId/evaluation-components/:componentId/students', StudentRouter)

  router.use('/:courseId/evaluation-components/:componentId/criterias', CriteriaRouter)

  router.use('/:courseId/evaluation-components/:componentId/students/:studentId/grades', GradeRouter)


  return router;
}

module.exports = CourseRouter();