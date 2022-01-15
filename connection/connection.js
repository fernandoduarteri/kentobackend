const { Pool } = require('pg');

const dbConnection = async() =>{

   try {
       const pool = new Pool();
        await pool.connect();
        return pool;
       console.log('Connected!!')
   } catch (error) {
       console.log(error.message)
   } 
}
module.exports= {
    dbConnection
}