const registration = require('../models/employeeRegistration.models');


let employeeRegistration = async(req, res) =>{

    try {
        let { empId, name, phoneNumber, password, email} = req.body;
        if(!email || !name || !phoneNumber || !password || !email){
            return res.status(400).json({message:`Please enter the correct value`})
        }
        let data = await registration( empId, name, phoneNumber, password, email);
        return res.status(200).send(data);

    } catch (error) {
        console.log('error in registration of emplyee', error);
        return res.status(500).send('Internal server error');
        
    }
}

module.exports = employeeRegistration;