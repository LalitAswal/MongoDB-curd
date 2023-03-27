const jwt = require('jsonwebtoken');


const jwtMiddleWare = (req, res, next)=>{

    try {
    const token = req.header('Authorization');
    console.log('middle ware token ',token, req.header('Authorization'))
    if(!token){
        res.send(403).send("Access Denied");
    }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decoded);

        req.empId = decoded.empId;
        next();
    } catch (error) {
        console.log("token error is ===>",error);
        res.status(404).send('invalid Token');
        
    }
    

}

module.exports = jwtMiddleWare;