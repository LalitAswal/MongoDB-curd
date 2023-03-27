const employeeDB = require('../config/createEmpSchema');


let addEmployees = async (empId, name, phoneNumber) =>{
    let newEmployee = new employeeDB({empId, name, phoneNumber});
    let result = await newEmployee.save();

    return `Data saved successfully`;
}


module.exports = addEmployees;