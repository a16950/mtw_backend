var Criteria = require('./model');

class CriteriaService {
  create(values) {
    return Criteria.create(values);
  }

  findAll(query) {
    return Criteria.find(query).exec();
  }

  findById(id) {
    return Criteria.findById(id).exec();
  }

  remove(query) {
    return Criteria.findOneAndRemove(query).exec();
  }

  updateById(id, values) {
    return Criteria.findOneAndUpdate({ _id: id }, values, { new: true, runValidators: true }).exec();
  }
}

module.exports = new CriteriaService();