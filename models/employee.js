
const mongoose = require('mongoose');

// creating a structure and schema for employee
let employeeScheme = new mongoose.Schema({
    name : String,
    designation : String,
    salary : Number
});

module.exports = mongoose.model('Employee', employeeScheme);