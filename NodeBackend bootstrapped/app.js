const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/db')
const user = require('./routes/users')
const post = require('./routes/post')


mongoose.connect(config.database,{ useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
console.log(`Connected to Database:${config.database}`)
});



const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello fom the server')
})


app.use(bodyParser.json());
 app.use(cors());


app.use('/',user);
app.use('/',post)
app.listen(port,()=>{
    console.log(`Sever started at port ${port}`)
})