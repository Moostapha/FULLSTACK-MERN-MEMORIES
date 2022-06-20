// all post routes

import express  from "express";

// router init
const router = express.Router();

// Importation des fonctions du controller
import {getAllPosts, createPost} from '../controllers/posts.js'

// GET route pour test avec logique métier
router.get('/', getAllPosts);

router.get('/', createPost);




// export router
export default router;

