var Student = require('./model');

class StudentService {
  create(values) {
    return Student.create(values);
  }

  findAll(query) {
    return Student.find(query).exec();
  }

  findById(id) {
    return Student.findById(id).exec();
  }

  remove(query) {
    return Student.findOneAndRemove(query).exec();
  }

  updateById(id, values) {
    return Student.findOneAndUpdate({ _id: id }, values, { new: true, runValidators: true }).exec();
  }
}

module.exports = new StudentService();