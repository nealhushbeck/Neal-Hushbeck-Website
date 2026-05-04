// JavaScript Document

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/gridImages', (req, res) => {
  const dirPath = path.join(__dirname, 'public/gridImages');

  fs.readdir(dirPath, (err, files) => {
    if (err) return res.status(500).send('Error loading images');

    res.json(files.map(file => `/gridImages/${file}`));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
