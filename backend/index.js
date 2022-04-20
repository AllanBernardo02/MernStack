import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});


//https://www.mongodb.com/cloud/atlas

// const CONNECTION_URL = 'mongodb+srv://isproject2:isproject2123@cluster0.ecjb8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001; // to check if the port is existing or not

//it is use to connect into database
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    
    .catch((error) =>console.log(error.message)) // .catch to check if the database connection is not successfull

    // mongoose.set('findAndModify', false); // make sure that we dont get any warning in the console

    