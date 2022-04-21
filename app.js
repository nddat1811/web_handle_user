const express = require('express');
const db = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//import routes

const UserRoute = require('./routes/user');

app.use('/user', UserRoute);
//routes

app.get('/', async (req, res)=>{
    res.send('hi');
})

db.connect(process.env.DB_URI, () => console.log('connected to DB'));

app.listen(3000);



 
