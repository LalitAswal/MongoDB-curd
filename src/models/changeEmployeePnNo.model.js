const employeeDB = require("../config/createEmpSchema");

let changePhNo = async (empId, phoneNumber) => {

    let result = await employeeDB.findOneAndUpdate(
      empId,
      { $set: { phoneNumber: phoneNumber } },
      { new: true }
    );
    return result;

};

module.exports = changePhNo;
