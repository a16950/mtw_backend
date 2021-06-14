var Student = require('../../../../models/student');
var helpers = require('../../../helpers');

class StudentController {
  create(req, res, next) {
    var evaluationComponent = { evaluationComponent: req.params.componentId };
    var data = Object.assign(req.body, evaluationComponent);

    Student.create(data)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Student.findAll({evaluationComponent: req.params.componentId })
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    Student.findById(req.params.studentId)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    Student.remove({ _id: req.params.studentId })
      .then(helpers.successEmptyResponse(res))
      .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    var student = { student: req.params.studentId };
    var data = Object.assign(req.body, student);

    Student.updateById(req.params.studentId, data)
      .then(helpers.successResponse(res))
      .catch(helpers.nextError(next));
  }
}

module.exports = new StudentController();