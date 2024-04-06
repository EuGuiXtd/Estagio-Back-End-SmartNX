require('dotenv').config()

const express = require('express');
const postRoute = require('./routes/post.route');

const app = express();

app.use(express.json());
app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});



module.exports = app;