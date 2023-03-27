const login = require("../models/login.models");
const jwt = require('jsonwebtoken');


let empLogin = async (req, res) => {
  try {
    let { empId, password } = req.body;
    if (
      Object.values(req.body).some(
        (value) => value === undefined || value === null || value === ""
      )
    ) {
      res
        .status(400)
        .json({ message: `Please enter the correct empId and password` });
    }
    let data = await login(empId, password);
    if (!data.empId) {

      res.status(401).json({ message: "Logged in failed" });
    }
    const expireTime = process.env.JWT_EXPIRE_TIME;
    const SECRET_KEY = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ empId }, SECRET_KEY, { expiresIn: expireTime });
    console.log('token:::::>', token)
    res.status(200).json({ message: "Logged in successfully", token: token });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports = empLogin;
