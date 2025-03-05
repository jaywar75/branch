// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello from APEXSUITE Node.js Branch API!');
});

// Example GET endpoint to simulate retrieving data from an external service
app.get('/status', (req, res) => {
    res.json({ status: 'Branch API is up and running', timestamp: new Date() });
});

// Example POST endpoint to handle incoming integration data
app.post('/integrate', (req, res) => {
    // Log the received data for demonstration purposes
    console.log('Received integration request:', req.body);

    // Simulate processing (e.g., calling an external API, transforming data, etc.)
    const processedData = {
        received: req.body,
        processed: true,
        message: 'Data processed successfully'
    };

    res.json(processedData);
});

// Start the server
app.listen(port, () => {
    console.log(`APEXSUITE Branch API server is running on port ${port}`);
});