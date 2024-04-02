const express = require('express');
const router = express.Router();

const addressController = require('../controllers/address.controller');

router.get('/', addressController.findAll);
router.get('/:id', addressController.findOne)
router.post('/', addressController.create);
router.patch('/:id', addressController.update)
router.delete('/:id', addressController.delete)

module.exports = router;