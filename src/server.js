const http = require('http');
const app =require('./app');
const server = http.createServer(app);
const dotenv = require('dotenv');
console.log('checking for server file')
// require('../src/config/config.env')
const PORT = 3000;

dotenv.config({path:'src/config/config.env'});


server.listen(process.env.PORT, ()=>{
    console.log(` Running at port number ${PORT}`)
});