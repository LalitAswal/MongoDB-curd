const addEmployees = require('../models/addEmployee.models');


let addEmployeeDetail = async(req, res) =>{

    try {
        let { empId, name, phoneNumber} = req.body;
        if(!empId || !name || !phoneNumber){
            return res.status(400).json({message:`Please enter the correct value`})
        }
        let data = await addEmployees(empId, name, phoneNumber);
        return res.status(200).send(data);

    } catch (error) {
        return res.status(500).send('Internal server error');
        
    }
}

module.exports = addEmployeeDetail;