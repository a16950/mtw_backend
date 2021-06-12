var Course = require('./model');

class CourseService {

  create(values) {
    return Course.create(values);
  }

  findAll(query) {
    return Course.find(query).exec();
  }

  findById(id) {
    return Course.findById(id).exec();
  }

  remove(query) {
    return Course.findOneAndRemove(query).exec();
  }

  updateById(id, values) {
    return Course.findOneAndUpdate({ _id: id }, values, { new: true, runValidators: true }).exec();
  }
}

module.exports = new CourseService();