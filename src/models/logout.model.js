const employeeRegistrationDB = require('../config/employeeRegistrationSchema');


let logout = async (empId, name, phoneNumber) =>{
    let newEmployee = new employeeRegistrationDB({empId, name, phoneNumber});
    let result = await newEmployee.save();

    return `Logout Successfully`;
}


module.exports = logout;