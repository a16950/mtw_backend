var EvaluationComponent = require('./model');

class EvaluationComponentService {
  create(values) {
    return EvaluationComponent.create(values);
  }

  findAll(query) {
    return EvaluationComponent.find(query).exec();
  }

  findById(id) {
    return EvaluationComponent.findById(id).exec();
  }

  remove(query) {
    return EvaluationComponent.findOneAndRemove(query).exec();
  }

  updateById(id, values) {
    return EvaluationComponent.findOneAndUpdate({_id: id}, values, {new: true, runValidators: true}).exec();
  }
}

module.exports = new EvaluationComponentService();