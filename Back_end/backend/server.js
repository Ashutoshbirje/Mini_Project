const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 5111;

// MongoDB connection string
const uri = "mongodb://localhost:27017/Appointemnt";
const client = new MongoClient(uri);
let db;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        db = client.db("appointmentDB");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
        process.exit(1);
    }
}

// Routes

// Get all appointments
app.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await db.collection('appointments').find().toArray();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching appointments", error: error.message });
    }
});

// Create a new appointment
app.post('/api/appointments', async (req, res) => {
    const appointment = {
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        reason: req.body.reason,
        status: 'pending'
    };
    
    try {
        const result = await db.collection('appointments').insertOne(appointment);
        res.status(201).json({ ...appointment, _id: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Error creating appointment", error: error.message });
    }
});

// Update an appointment
app.put('/api/appointments/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        const result = await db.collection('appointments').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: req.body },
            { returnDocument: 'after' }
        );
        
        if (result.value) {
            res.json(result.value);
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating appointment", error: error.message });
    }
});

// Delete an appointment
app.delete('/api/appointments/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        const result = await db.collection('appointments').deleteOne({ _id: new ObjectId(id) });
        
        if (result.deletedCount === 1) {
            res.status(204).send();  // No content to send back on successful delete
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting appointment", error: error.message });
    }
});

// Start server and connect to MongoDB
connectToMongo().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});
