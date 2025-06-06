// index.js (at the repository root)
const express = require('express')                                 // Import Express  [oai_citation:17‡digitalocean.com](https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express?utm_source=chatgpt.com)
const path = require('path')                                       // Built-in path module  [oai_citation:18‡geeksforgeeks.org](https://www.geeksforgeeks.org/express-js-express-static-function/?utm_source=chatgpt.com)

const app = express()                                              // Initialize Express  [oai_citation:19‡digitalocean.com](https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express?utm_source=chatgpt.com)
const PORT = process.env.PORT || 3000                              // Use 3000 if no env port  [oai_citation:20‡digitalocean.com](https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express?utm_source=chatgpt.com) [oai_citation:21‡youtube.com](https://www.youtube.com/watch?v=nZakTwJZWV8&utm_source=chatgpt.com)

// Serve static files from the "public" directory:
app.use(express.static(path.join(__dirname, 'public')))            // Now any request for "/" loads public/index.html  [oai_citation:22‡expressjs.com](https://expressjs.com/en/starter/static-files.html?utm_source=chatgpt.com) [oai_citation:23‡geeksforgeeks.org](https://www.geeksforgeeks.org/express-js-express-static-function/?utm_source=chatgpt.com)  

// Optional health check (useful later for webhooks, etc.)
app.get('/health', (req, res) => res.json({ status: 'OK' }))        // Simple JSON response on /health  [oai_citation:24‡youtube.com](https://www.youtube.com/watch?v=nZakTwJZWV8&utm_source=chatgpt.com)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)        // Confirm server start in console  [oai_citation:25‡digitalocean.com](https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express?utm_source=chatgpt.com)
})