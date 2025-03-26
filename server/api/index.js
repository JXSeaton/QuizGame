const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Routes
app.get('/', function(res, req){
    res.send("root endpoint")
});
app.use('/api/quizzes', quizRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;