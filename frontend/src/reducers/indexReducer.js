import { combineReducers} from 'redux';

// individual reducers created from reducers/postsReducers
import posts from './postsReducers'

// export to index.js of src
export default combineReducers({ posts });