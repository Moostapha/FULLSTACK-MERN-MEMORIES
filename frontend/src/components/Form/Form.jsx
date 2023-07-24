import React, { useState , useEffect } from "react";
// Building component for Form component
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// File handling with FileBase
import FileBase from 'react-file-base64';
// Dispatch actions in this component for usage
import { useDispatch, useSelector } from "react-redux";
// Action to dispatch
import { createPost, updatePost } from "../../actions/postActions";
// styles de Form
import useStyles from './styles';

// Logique pour update un post par extraction id dynamique
// Acceptation :id transmis depuis App.js via hooks useState()
// GET THE CURRENT ID TO DISPLAY INFOS IN FIELDS FOR UPDATE

const Form = ({ currentId, setCurrentId }) => {
    console.log('ID POST CLICKED',currentId)
    // State postData
    const [postData, setPostData] = useState(
        { creator:'', title:'', message:'', tags:'', selectedFile:'' }
    );
    
     // Fetching the postID clicked from post edit btn
    const post = useSelector( 
        (state) => currentId ? state.posts.find( 
            ( postToUpdate ) => postToUpdate._id === currentId
        ) : null 
    );
    
    // style ajouté
    const classes = useStyles();
    
    // Dispatch actions
    const dispatch = useDispatch();
    
    // Remplir les champs du form avec les infos du post à updater
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    
    // logic to submit form, action will be dispatched in here
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Actions dispatch
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        }else {
            dispatch(createPost(postData));
        }
        // Function clear to reset form after editing or creatin post
        clear();
        
    }
    
    // logic to clear 
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator:'', title:'', message:'', tags:'', selectedFile:'' });
    }
    
    return (
        
        <Paper className = {classes.paper}>
            
            <form onSubmit={handleFormSubmit}
                autoComplete="off" noValidate 
                className={`${classes.root} ${classes.form}`} >
                
                {/* rendu conditionnel si currentId existe */}
                <Typography variant="h6">
                    {currentId ? 'Modifier le souvenir' : 'Créez votre souvenir'}
                </Typography>
                
                <TextField name="creator" variant="outlined" label="Nom" fullWidth
                    // storing the value in the state via useState in postData
                    value={postData.creator}
                    // changing the chosen field while keepin the rest with spread operator
                    onChange={(event) => setPostData({ 
                            ...postData, 
                            creator: event.target.value 
                        })
                    }
                />
                
                <TextField name="title" variant="outlined" label="Titre souvenir" fullWidth
                    // storing the value in the state via useState in postData
                    value={postData.title}
                    // changing the chosen field while keepin the rest with spread operator
                    onChange={(event) => setPostData({ 
                            ...postData, 
                            title: event.target.value 
                        })
                    }
                />
                
                <TextField name="message" variant="outlined" label="Message" fullWidth
                    // storing the value in the state via useState in postData
                    value={postData.message}
                    // changing the chosen field while keepin the rest with spread operator
                    onChange={(event) => setPostData({ 
                            ...postData, 
                            message: event.target.value 
                        })
                    }
                />
                
                <TextField name="tags" variant="outlined" label="tags" fullWidth
                    // storing the value in the state via useState in postData
                    value={postData.tags}
                    // changing the chosen field while keepin the rest with spread operator
                    onChange={ (event) => setPostData({ ...postData, tags: event.target.value }) }
                />
                
                {/* Adding a file with fileBase */}
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                
                <Button 
                    className={classes.buttonSubmit} variant="contained" 
                    color="primary" size="large" type="submit" fullWidth
                >
                    {/* rendu conditionnel si currentId existe */}
                    {currentId ? 'MODIFIER' : 'AJOUTER'}
                </Button>
                
                <Button onClick={clear}
                    variant="contained" 
                    color="secondary" size="small" type="submit" fullWidth>
                    ANNULER
                </Button>
            </form>
        </Paper>
    );
}

export default Form;