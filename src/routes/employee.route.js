const express = require('express');
const  router = express();
const res = require('express/lib/response');
const employees = require('../controllers/employeeList.controller');
const addEmployeeDetail =require('../controllers/addEmployeeDetails.controller');
const changeAddress = require('../controllers/changeEmployeePnNo.controller');
const deleteEmployee = require('../controllers/deleteEmployee.controller');
const employeeRegistration = require('../controllers/employeeRegistration.controller');
const  empLogin = require('../controllers/login.controller');
const empLogout = require('../controllers/logout.controller');
const jwtMiddleWare = require('../middleware/jwtAuth');




router.post('/registration',
employeeRegistration);

router.post('/login',
empLogin);


router.post('/logout',
empLogout)

router.get('/employeeList',
jwtMiddleWare, 
employees);

router.post('/addEmployee',
jwtMiddleWare,
addEmployeeDetail);

router.put('/emp/:empId',
jwtMiddleWare,
changeAddress);

router.delete('/emp/:empId',
jwtMiddleWare,
deleteEmployee);


module.exports = router;
