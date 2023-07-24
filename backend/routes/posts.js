// all post routes

import express  from "express";

// router init
const router = express.Router();

// Importation des fonctions du controller
import {getAllPosts, createPost, updatePost, deletePost} from '../controllers/posts.js'


// ROUTES

// GET route pour test avec logique métier
router.get('/', getAllPosts);

// POST create post
router.post('/', createPost);

// PATCH update post existing documents
router.patch('/:id', updatePost)

// DELETE post
router.delete('/:id', deletePost)

// export router
export default router;

