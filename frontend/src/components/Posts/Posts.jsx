import React from "react";
// displaying posts from the backend to the frontend
import { Grid, CircularProgress } from '@material-ui/core'
// use of data redux store in this component to fetch all posts
import { useSelector } from "react-redux";
// single component to map in this component Posts
import Post from "./Post/Post";
// styles de Posts
import useStyles from './styles';

// props setCurrentId from app.js to pass it to child post component => props drillin'
const Posts = ({ setCurrentId }) => {
    
    // Initialize hooks
    const posts = useSelector((state) => state.posts);
    console.log('All posts from database', posts);
    
    const classes = useStyles();
    
    return (
        
        // si pas de posts 0 on renvoie true => spinner
        // sinon on renvoie le grid
        
        !posts.length ? <CircularProgress/> : (
            
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {/* Logique js Loop sur les posts  */}
                {posts.map( (post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}


export default Posts;