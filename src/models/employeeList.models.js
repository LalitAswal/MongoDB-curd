const employeeDB = require('../config/createEmpSchema');


let employeeList = async (empId, name, phoneNumber) =>{
    let result = await employeeDB.find();

    return result;
}


module.exports = employeeList;