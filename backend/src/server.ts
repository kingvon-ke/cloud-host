import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes initialization
app.get('/', (req, res) => {
    res.send('Welcome to the Express server with WebSocket support!');
});

// WebSocket connection
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
