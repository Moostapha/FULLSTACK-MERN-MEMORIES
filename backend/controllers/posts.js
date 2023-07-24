import mongoose from "mongoose";
// IMPORT DES MODELS
import PostMessage from "../models/PostMessage.js";

// LOGIQUE METIER

export async function getAllPosts (req, res) {
    try {
        
        // await car la requête sur all posts va prendre du temps => add async
        const postMessages = await PostMessage.find();
        // console.log('ALL POSTS FROM MONGO-DB', postMessages)
        // success satus
        res.status(200).json(postMessages)
    
    } catch (error) {
        
        // failure status
        res.status(404).json({message : error.message});
    }
}


export async function createPost (req, res) {
    
    // post added from client, crops de la requête
    const postAdded = req.body;                  
    
    // inserting data from client in model PostMessage entries
    const newPost = new PostMessage(postAdded); 
    
    try {
        // saving newPost in mongoDB 
        await newPost.save(); 
        
        // success status
        res.status(201).json(newPost);
        
    } catch (error) {
        
        // failure status
        res.status(409).json({message : error.message});
    }
}


export async function updatePost ( req, res ) {
    
    // datas from the client | frontend
    const { id: _id } = req.params;
    const post = req.body;
    
    console.log('POST TO UPDATE', post)
    
    // si l'id n'est pas valide
    if( !mongoose.Types.ObjectId.isValid(_id) ) return res.status(404).send("POST EXISTE PAS AVEC CET ID !!!");
    
    // sinon on peut updater
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true} );
    console.log('NEW POST UPDATED', updatedPost)
    res.status(200).json({ message: 'POST MODIFIÉ AVEC SUCCES', updatedPost });
}

export async function deletePost (req, res) {
    // datas from the client | frontend
    const { id } = req.params;
    const post = req.body;
    console.log('POST TO DELETE', post);
    
    // si l'id n'est pas valide
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).send("POST EXISTE PAS AVEC CET ID !!!");
    
    // logique delete
    await PostMessage.findByIdAndRemove(id);
    
    // réponse
    res.json({ message:'POST SUPPRIMÉ AVEC SUCCES'})
}

// Another possible writing of functions below usin' const
// export const updatePost = async ( req, res) => {
    
// }