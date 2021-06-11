var express = require('express');
var ctrl = require('./controller');

function ClassRouter() {
  var router = express.Router({ mergeParams: true });

  router.route('/')
  .get(ctrl.findAll)
  .post(ctrl.create);


 /*router.route('/:classId')
  .delete(ctrl.removeById)
  .get(ctrl.findById)
  .put(ctrl.updateById);*/

  return router;
}

module.exports = ClassRouter();