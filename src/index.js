require('dotenv').config();
const express = require('express');
const { PORT } = process.env;
const app = express();
const port = PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({status: "Success"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});