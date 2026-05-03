const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(__dirname));

// Example API
app.get('/api/data', (req, res) => {
    res.json({ message: "Backend working" });
});

app.post('/api/contact', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({ status: "received" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});