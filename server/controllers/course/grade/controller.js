var Grade = require('../../../../models/grades');
var helpers = require('../../../helpers');

class GradeController {
  create(req, res, next) {
    var student = { student: req.params.studentId };
    var criteria = { criteria: req.params.criteriaId };
    var data = Object.assign(req.body, student, criteria);

    Grade.create(data)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Grade.findAll({student: req.params.studentId })
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    Grade.findById(req.params.gradeId)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    Grade.remove({ _id: req.params.gradeId })
      .then(helpers.successEmptyResponse(res))
      .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    var student = { student: req.params.studentId };
    var criteria = { criteria: req.params.criteriaId };
    var data = Object.assign(req.body, student, criteria);

    Grade.updateById(req.params.gradeId, data)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }
}

module.exports = new GradeController();