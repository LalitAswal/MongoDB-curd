const jwt = require('jsonwebtoken');


const jwtMiddleWare = (req, res, next)=>{

    try {
    const token = req.header('Authorization').split(" ")[1];
    console.log('checking token line 8', token);
    console.log('middle ware token ',token, req.header('Authorization'))
    if(!token){
        return  res.send(403).send("Access Denied");
    }   
    console.log('line 12')
    let JWT_SECRET_KEY = 'MayYourCoffeeKickInBeforeRealityDoes';
    console.log('checking for token---->', token)
        const decoded = jwt.verify(token, JWT_SECRET_KEY);

        console.log('checking decoded ====>',decoded);

        req.empId = decoded.empId;
        next();
    } catch (error) {
        console.log("token error is ===>",error);
        return res.status(404).send({"message":'invalid Token'});
        
    }
    

}

module.exports = jwtMiddleWare;