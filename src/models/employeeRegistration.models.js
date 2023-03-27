const employeeRegistrationDB = require('../config/employeeRegistrationSchema');


let registration = async (empId, name,phoneNumber ,password , email) =>{
    let newEmployee = new employeeRegistrationDB({empId, name, phoneNumber, password, email});
    let result = await newEmployee.save();

    return `employee Registered successfully`;
}


module.exports = registration;