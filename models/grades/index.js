var Grades = require('./model');

class GradesService {
  create(values) {
    return Grades.create(values);
  }

  findAll(query) {
    return Grades.find(query).exec();
  }

  findById(id) {
    return Grades.findById(id).exec();
  }

  remove(query) {
    return Grades.findOneAndRemove(query).exec();
  }

  updateById(id, values) {
    return Grades.findOneAndUpdate({ _id: id }, values, { new: true, runValidators: true }).exec();
  }
}

module.exports = new GradesService();