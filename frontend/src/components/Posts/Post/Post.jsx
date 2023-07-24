import React from "react";
// material UI components
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/';
// material UI icons import sans les {} sinon error
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon  from '@material-ui/icons/Delete';
import MoreHorizIcon  from '@material-ui/icons/MoreHoriz';
// moment function for created at info
import moment from 'moment'
// styles de Post
import useStyles from './styles';
// dispatch action + logic deletePost
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/postActions";

const Post = ({ post , setCurrentId }) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
            
            <CardMedia 
                className={classes.media} 
                image={post.selectedFile} 
                title={post.title}
            />
            
            <div className={classes.overlay}>
                <Typography variant="h6">
                    {post.creator}
                </Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button 
                    // extracting :id and send it to the form so it displays post from this id
                    onClick={ () => setCurrentId(post._id) } 
                    size="small" 
                    style={{color: 'white'}}
                >
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags?.map( (tag) => `#${tag} ` )}
                </Typography>
            </div>
            
            <Typography className={classes.titleCard} variant="h5" color="primary" fontWeight="fontWeightBold" gutterBottom>
                {post.title}
            </Typography>
            
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {post.message}
                </Typography>
            </CardContent>
            
            <CardActions className={classes.CardActions}>
                <Button 
                    onClick={ ( ) => {} } 
                    size="small" color="primary">
                    <ThumbUpAltIcon/> Like {post.likeCount}
                </Button>
                
                <Button onClick={() => dispatch(deletePost(post._id))} 
                    color="secondary" size="small">
                    <DeleteIcon/> Delete
                </Button>
            </CardActions>
            
        </Card>
    );
}

export default Post;