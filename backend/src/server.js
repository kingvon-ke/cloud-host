const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const mongoose = require('mongoose');

// Initialize Express App
const app = express();
const server = http.createServer(app);

// Setup WebSocket Server
const wss = new WebSocket.Server({ server });

// Database Initialization
const uri = 'your_database_uri'; // replace with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// Middleware Setup
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Route Handlers
app.get('/', (req, res) => {
    res.send('Welcome to Bera Host API');
});

// WebSocket connection
wss.on('connection', (ws) => {
    console.log('New WebSocket connection');
    ws.on('message', (message) => {
        console.log('Received:', message);
        // Handle incoming messages
    });
    ws.send('Welcome to Bera Host WebSocket!');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
