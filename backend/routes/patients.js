const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
    try {
        const patient = new Patient({
            ...req.body,
            assignedDoctor: req.doctor._id
        });
        await patient.save();
        res.status(201).json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const patients = await Patient.find({ assignedDoctor: req.doctor._id });
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const patient = await Patient.findOneAndDelete({ 
            _id: req.params.id, 
            assignedDoctor: req.doctor._id 
        });
        if (!patient) return res.status(404).json({ message: "Patient not found or unauthorized" });
        res.json({ message: "Patient deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;