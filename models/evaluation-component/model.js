var mongoose = require('mongoose');
var { ObjectId } = mongoose.Schema.Types;

var EvaluationComponentSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    course: { type: ObjectId, ref: 'Course', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('EvaluationComponent', EvaluationComponentSchema);