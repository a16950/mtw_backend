var express = require('express');
var ctrl = require('./controller');

function EvaluationComponentRouter() {
  var router = express.Router({ mergeParams: true });

  router.route('/')
  .get(ctrl.findAll)
  .post(ctrl.create);


  router.route('/:componentId')
  .delete(ctrl.removeById)
  .get(ctrl.findById)
  .put(ctrl.updateById);

  return router;
}

module.exports = EvaluationComponentRouter();