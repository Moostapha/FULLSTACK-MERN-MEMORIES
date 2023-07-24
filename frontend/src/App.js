import React, { useState, useEffect } from 'react';
// Styling material UI
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
// redux dispatching actions HOOKS
import {useDispatch} from 'react-redux'
// actions
import { getPosts } from './actions/postActions';
// images
import memories from './images/memories.png'
// Components
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
// styles de App
import useStyles from './styles';
// Alerts ui
import AlertMsg from './components/AlertUser/AlertMsg';
// import AlertError from './components/AlertUser/AlertError';

// App render
const App = () => {

    // hooks useState() pour extraction :id pour le passer aux enfants <Posts/> et <Form/>
    const [ currentId, setCurrentId ] = useState(null);
    // dispatching actions with useDispatch() useEffect() to get all posts
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getPosts());
        }, [currentId, dispatch]);
    // style ajouté avec material ui
    const classes = useStyles();
    
    return (
        <Container maxWidth = 'lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    MEMORIES APPLICATION
                </Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <AlertMsg />
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form 
                                currentId={currentId} 
                                setCurrentId= {setCurrentId} 
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;