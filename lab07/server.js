const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (e.g., HTML, CSS, JS)
const path = require('path');
// Serve static files (e.g., images, script.js, styles.css) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to roll dice
app.get('/roll-dices', (req, res) => {
    const diceValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    res.json(diceValues);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
