const changePhNo = require('../models/changeEmployeePnNo.model');

let changeDetail = async(req, res) =>{
    try {
        let {empId } = req.params;
        let { phoneNumber} = req.body;
        let data = await changePhNo(empId, phoneNumber);

        res.status(201).send(data);

    } catch (error) {
        res.status(500).send('internal server error');
        
    }
}

module.exports = changeDetail;