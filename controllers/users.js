const { response, request } = require('express');
const { dbConnection } = require('../connection/connection');

const getUsers = async (req = request, res = response) => {
    const pool = await dbConnection();
    console.log('Getting users data');
    try {
        const response = await pool.query("SELECT user_id, user_first_name, user_last_name FROM public.users ORDER BY user_id ASC ");
        const datos = response.rows;
        res.status(200).json({
            ok: true,
            data: datos
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed to get data'
        })
    }
    console.log(response.rows)
}

module.exports = {
    getUsers
}