const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory:
app.use(express.static(path.join(__dirname, 'public')));

// Optional health check (useful later for webhooks, etc.)
app.get('/health', (req, res) => res.json({ status: 'OK' }));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});