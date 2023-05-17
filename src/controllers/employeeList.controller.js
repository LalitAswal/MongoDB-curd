let employeeList = require('../models/employeeList.models');

let employees = async(req, res) =>{

    try {

        let data = await employeeList();
        return res.status(200).send(data);
        
    } catch (error) {
        return  res.status(500).send("internal server error");
        
    }

}

module.exports = employees;