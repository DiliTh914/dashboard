const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname, '..', '.env')});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
mongoose.connection.once('open', () => {
    console.log("MongoDb database connection established successfully");
});

routes(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



