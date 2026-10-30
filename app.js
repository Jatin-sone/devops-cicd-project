const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello! My DevOps CI/CD Project is Running!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy'
    });
});

module.exports = app;