var Criteria = require('../../../../models/criteria');
var helpers = require('../../../helpers');

class CriteriaController {
  create(req, res, next) {
    var evaluationComponent = { evaluationComponent: req.params.componentId };
    var data = Object.assign(req.body, evaluationComponent);

    Criteria.create(data)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Criteria.findAll({evaluationComponent: req.params.componentId })
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    Criteria.findById(req.params.criteriaId)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    Criteria.remove({ _id: req.params.criteriaId })
      .then(helpers.successEmptyResponse(res))
      .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    var evaluationComponent = { evaluationComponent: req.params.componentId };
    var data = Object.assign(req.body, evaluationComponent);

    Criteria.updateById(req.params.criteriaId, data)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }
}

module.exports = new CriteriaController();