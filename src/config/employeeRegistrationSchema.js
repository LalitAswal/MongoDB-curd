const mongoose = require('mongoose');


const employeeRegistrationSchema =  mongoose.Schema({
    "empId":{
        "type": Number,
        "requirement":true,
        "unique":true
    },
    "name":{
        "type":String,
        "require":true
    },
    "phoneNumber":{
        "type":Number,
        "require":true
    },
    "password":{
        "type":String,
        "require":true
    },
    "email":{
        "type":String,
        "require":true,
        "unique":true
    }   

});
    
const employeeRegistrationDB = mongoose.model('employeesRegistration',employeeRegistrationSchema);
module.exports = employeeRegistrationDB;