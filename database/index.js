const mongoose = require('mongoose');
const dbName = 'school-db';

function initialize() {
  mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('DB connected.')
  });
}

module.exports = { initialize };