// IMPORT DES MODELS
import PostMessage from "../models/PostMessage.js";


// LOGIQUE METIER

export async function getAllPosts (req, res) {
    try {
        
        // await car la requête sur all posts va prendre du temps => add async
        const postMessages = await PostMessage.find();
        
        // success satus
        res.status(200).json(postMessages)
    
    } catch (error) {
        
        // failure status
        res.status(404).json({message : error.message});
    }
}


export function createPost (req, res) {
    
    try {
        
        const newPost = req.body;
        
        
    
    } catch (error) {
        // failure status
        res.status(404).json({message : error.message});
    }
}