var Class = require('../../../../models/class');
var helpers = require('../../../helpers');

class ClassController {
  create(req, res, next) {
    var course = { course: req.params.courseId};
    var data = Object.assign(req.body, course);

    Class.create(data)
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }

  findAll(req, res, next) {
    Class.findAll({course: req.params.courseId})
    .then(helpers.successResponse(res))
    .catch(helpers.nextError(next));
  }
}

module.exports = new ClassController();