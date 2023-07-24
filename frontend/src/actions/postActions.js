import * as api from '../api/indexApi';

// Actions creators : function returning an action which is an object with type property and payload
// asynchronous datas: Fetchin all the posts takes time so we must use an async function here => use 
// of thunk

// Actions dispatch functions with verbs with action.type of reducers

// Action get all posts, action dispatched in Post component with useDispatch
export const getPosts = () => async (dispatch) => {
    try {
        
        // fetchin data from the api
        const { data } = await api.fetchPosts();
        
        // sending data
        dispatch({ type: 'FETCH_ALL', payload: data})
        
    } catch (error) {
        console.log(error.message);
    }
};

// Action create post action dispatched in Form component with useDispatch
export const createPost = (post) => async (dispatch) => {
    try {
        
        // destructurin the data from the response
        const { data } = await api.createPost(post);
        
        // dispatching the action with the action from the reducer
        dispatch({type: 'CREATE', payload: data});
        
    } catch (error) {
        console.log('ERREUR LORS DE CREATEPOST', error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        // destructuring data from the response with { data}
        const { data } = await api.updatePost(id, post);
        console.log('POST TO UPDATE', data)
        
        dispatch({ type: 'UPDATE', payload: data })
        
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        // waiting for api call (not interested in response with delete function)
        await api.deletePost(id);
        
        // dispatch with reducers action type (verb)
        dispatch({ type: 'DELETE', payload: id});
        
    } catch (error) {
        console.log(error);
    }
}
