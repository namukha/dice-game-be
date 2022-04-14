const express = require('express');
const router = express.Router();
const DiceController = require('../controller/DiceController')
const UserValidation = require('../middleware/create_user')

// router.get('/getnum', DiceController.get_number);
router.post('/adduser', UserValidation.adduser(), DiceController.create_user);
// router.get('/saveresults', DiceController.save_res)

module.exports = router;