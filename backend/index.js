const express = require('express');
const app = express();
const PORT = 8000;
const mongoDB = require('./db/db');
const cors = require('cors');

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Orign, X-Requested-with, Content-Type, Accept"
    );
    next();
})

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/NewUser'))
app.use('/api', require('./routes/Products'))

app.listen(PORT, ()=> {
    console.log(`Server listening to port ${PORT}`)
})