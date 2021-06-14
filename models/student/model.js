var mongoose = require('mongoose');
var { ObjectId } = mongoose.Schema.Types;

var StudentSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    evaluationComponent: { type: ObjectId, ref: 'EvaluationComponent', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', StudentSchema);