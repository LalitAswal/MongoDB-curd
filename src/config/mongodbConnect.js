const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/employee',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family:4
})
.then(()=> console.log('mongodb is connected'))
.catch((err)=> console.log("db error is ==>",err));


module.exports = db;