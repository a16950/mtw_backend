var mongoose = require('mongoose');
var { ObjectId } = mongoose.Schema.Types;

var GradesSchema = new mongoose.Schema(
  {
    grade: { type: Number, required: true},
    student: { type: ObjectId, ref: 'Student', required: true},
    criteria: { type: ObjectId, ref: 'Criteria', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Grades', GradesSchema);