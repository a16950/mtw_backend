var Course = require('../../../models/course');
var helpers = require('../../helpers');

class CourseController {
  create(req, res, next) {
    Course.create(req.body)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Course.findAll()
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findById(req, res, next) {
    Course.findById(req.params.courseId)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  removeById(req, res, next) {
    Course.remove({_id: req.params.courseId})
    .then(helpers.successEmptyResponse(res))
    .catch(helpers.nextError(next));
  }

  updateById(req, res, next) {
    Course.updateById(req.params.courseId, req.body)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }
}

module.exports = new CourseController();