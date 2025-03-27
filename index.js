const express = require('express');
const mongoose = require('mongoose');
const Student = require('./Model/Schema'); 
const app = express();
app.use(express.json());

//
const cors = require('cors');
app.use(cors());



// database
mongoose.connect('mongodb+srv://sgowtham0181:vpK7myNoiQF8r0Qb@backenddb.ga2rrbz.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));


// GET Data
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve students' });
    }
});


// POST Data
app.post('/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add student' });
    }
});


// Server Port
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

