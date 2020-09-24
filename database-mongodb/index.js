const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/reviewesModule';

const db = mongoose.connect(mongoUri);

module.exports = db;
