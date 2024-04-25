require('dotenv').config();
const mongoose = require('mongoose');

const DBpassword = process.env.DB_PASS

async function conn () {
    mongoose.connect(DBpassword)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

}

conn();