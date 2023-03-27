const mongoose = require('mongoose');


const employeeSchema =  mongoose.Schema({
    "empId":{
        "type":Number,
        "require":true,
        "unique":true,
        ref: 'employeeRegistrationDB'
    },
    "name":{
        "type":String,
        "require":true
    },
    "phoneNumber":{
        "type":Number,
        "require":true
    }
});
    
const employeeDB = mongoose.model('employeesDetails',employeeSchema);
module.exports =employeeDB;