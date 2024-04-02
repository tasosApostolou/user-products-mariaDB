const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/', user.findAll);
router.get('/:id', user.findOne)
router.post('/', user.create);
router.patch('/:id', user.update)
router.delete('/:id', user.delete)

module.exports = router;