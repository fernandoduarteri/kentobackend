const { response, request } = require('express');
const { dbConnection } = require('../connection/connection');

const getLikes = async (req = request, res = response) => {
    const pool = await dbConnection();
    const id = parseInt(req.params.id)
    try {
        const response = await pool.query("SELECT A.fan_of_music_group FROM public.user_likes as A, public.users as B WHERE A.user_id=B.user_id AND A.user_id=" + id + " ORDER BY A.fan_of_music_group ASC");
        
        res.status(200).json({
            ok: true,
            data: response.rows
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed to get data'
        })
    }
}

module.exports = {
    getLikes
}