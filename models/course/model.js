var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema(
  {
    name: {type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', CourseSchema);