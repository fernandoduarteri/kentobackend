const express = require('express')
const { dbConnection } = require('./connection/connection')
const app = express()
require('dotenv').config();
const cors = require('cors')
app.use(cors());
app.use(express.json());

//Routes
app.use('/users/getList', require('./routes/users'));
app.use('/users/getLikes', require('./routes/likes'));

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port:  ${ process.env.PORT}`);
});