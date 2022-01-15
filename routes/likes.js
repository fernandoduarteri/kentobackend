const { Router } = require('express');
const { getLikes } = require('../controllers/likes');
const router = Router();

router.get('/:id',getLikes);

module.exports = router;