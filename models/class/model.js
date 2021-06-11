var mongoose = require('mongoose');
var { ObjectId } = mongoose.Schema.Types;

var ClassSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    course: { type: ObjectId, ref: 'Course', required: true},
    year: {type: Number, required: true}

  },
  { timestamps: true }
);

module.exports = mongoose.model('Class', ClassSchema);