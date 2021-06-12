var mongoose = require('mongoose');
var { ObjectId } = mongoose.Schema.Types;

var CriteriaSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    percent: { type: Number, required: true},
    component: { type: ObjectId, ref: 'EvaluationComponent', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Criteria', CriteriaSchema);