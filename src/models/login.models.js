const employeeRegistrationDB = require('../config/employeeRegistrationSchema');


let login = async (empId,password) =>{
    let result = await employeeRegistrationDB.findOne({empId, password});
    console.log('checiking login in model', result.empId);

    return result;
}

module.exports = login;