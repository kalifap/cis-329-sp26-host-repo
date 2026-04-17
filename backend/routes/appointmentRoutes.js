const appointmentController = require('../controllers/appointmentController');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res)=>{
    res.status(200).json({message:"appointment api!"})
})

router.get('/all', appointmentController.getAppointments);
router.post('/new', appointmentController.createAppointment);

module.exports = router;
