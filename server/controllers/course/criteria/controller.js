var Criteria = require('../../../../models/criteria');
var helpers = require('../../../helpers');

class CriteriaController {
  create(req, res, next) {
    Criteria.create(req.body)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Criteria.findAll()
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    Criteria.findById(req.params.CriteriaId)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    Criteria.remove({_id: req.params.CriteriaId})
    .then(helpers.successEmptyResponse(res))
    .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    Criteria.updateById(req.params.CriteriaId, req.body)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }
}

module.exports = new CriteriaController();