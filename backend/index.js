import dotenv from 'dotenv';             // Variables d'environnement pour cacher user et password pour connection db
dotenv.config();                        // loads env. var. via process.env from the .env file

import express from 'express';           // Framework node.js
import mongoose from 'mongoose';        // Object Data Modelling library for mongoDB and Node.js
import bodyParser from 'body-parser';  // http request body parser POST PUT with req.body
import cors from 'cors';              // Cross Origin Ressource Sharing


// routes imported from routes folder
import postRoutes from './routes/posts.js';



// init express
const app = express();

// init routes
app.use('/posts', postRoutes);  // localhost:5000/posts

// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. Request post + put
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// 
app.use(cors());


// mongoDB Atlas db connection with mongoose

const DATABASE_CONNECTION = process.env.CREDENTIALS;

const PORT = process.env.PORT || 5000;

mongoose.connect( 
    DATABASE_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true} 
)
    .then(() => app.listen(
        PORT, 
        () => console.log(`Server connected and running on port ${PORT}`)
    ))
    .catch((error) => 
        console.log('CONNECTION ISSUES: ', error.message)
    );

// mongoose.set('useFindAndModify', false);
