const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // Set the desired port for your API server

// Start the server
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});

// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))