// MODELS AND SCHEMA WITH MONGOOSE

import mongoose from "mongoose";

// schema d'un post
const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String, 
    tags:  [String], 
    selectedFile: String,  // Conversion d'une img en string avec b64
    likeCount: {
        Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});


// model => schema turns to model
const PostMessage = mongoose.model('PostMessage', postSchema);



// Exportation de nos models sur lesquels les opérations CRUD avec fonctions mongoose
export default PostMessage;