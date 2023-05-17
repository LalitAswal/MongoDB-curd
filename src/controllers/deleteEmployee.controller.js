const deleteEmployeeById = require('../models/deleteEmployee.models');

let deleteEmployee = async(req, res)=>{
    
    try {
        let { empId } = req.params;
        console.log('empId', empId)
        let data = await  deleteEmployeeById(empId);
        return  res.status(200).send(data);

    } catch (error) {
        if(error === `empId doesn't not exist`){
            res.status(404).send(error);
        }
        return res.status(500).send("internal server error");

        
    }
}

module.exports = deleteEmployee;