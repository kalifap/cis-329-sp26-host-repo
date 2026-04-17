const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/register', async (req, res)=>{
    res.status(200).json({message:"Welcome to Our Practice!"})
})

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router;