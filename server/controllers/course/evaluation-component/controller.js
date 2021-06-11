var EvaluationComponent = require('../../../../models/evaluation-component');
var helpers = require('../../../helpers');

class EvaluationComponentController {
  create(req, res, next) {
    var course = { course: req.params.courseId};
    var data = Object.assign(req.body, course);

    EvaluationComponent.create(data)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    EvaluationComponent.findAll({course: req.params.courseId})
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    EvaluationComponent.findById(req.params.componentId)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    EvaluationComponent.remove({_id: req.params.componentId})
    .then(helpers.successEmptyResponse(res))
    .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    var course = { course: req.params.courseId};
    var data = Object.assign(req.body, course);

    EvaluationComponent.updateById(req.params.componentId, data)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }
}

module.exports = new EvaluationComponentController();