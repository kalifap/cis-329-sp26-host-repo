const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const cors = require('cors');
const patientRoutes = require('./routes/patients');

dotenv.config();
connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointment', require('./routes/appointmentRoutes'));
app.use('/api/patients', patientRoutes);

const Patient = require('./models/Patient');

app.get('/dashboard', async (req, res) => {
    try {
        const patients = await Patient.find(); 
        res.render('dashboard', { patients });
    } catch (err) {
        res.status(500).send("Error rendering dashboard");
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));