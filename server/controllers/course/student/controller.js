var Student = require('../../../../models/student');
var helpers = require('../../../helpers');

class StudentController {
  create(req, res, next) {
    var evaluationComponent = { evaluationComponent: req.params.componentId};
    var data = Object.assign(req.body, evaluationComponent);

    Student.create(data)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Student.findAll({evaluationComponent: req.params.componentId})
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    Student.findById(req.params.componentId)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    Student.remove({_id: req.params.componentId})
    .then(helpers.successEmptyResponse(res))
    .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    var evaluationComponent = { evaluationComponent: req.params.componentId};
    var data = Object.assign(req.body, evaluationComponent);

    Student.updateById(req.params.componentId, data)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }
}

module.exports = new StudentController();