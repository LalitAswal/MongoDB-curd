const employeeDB = require('../config/createEmpSchema');


let deleteEmployeeById = async (empId) =>{
        let result = await employeeDB.deleteOne({"empId":empId});
        if(result.deletedCount === 0){
            throw `empId doest not exist`;
        }
        return `Data deleted Successfully`;
}


module.exports = deleteEmployeeById;