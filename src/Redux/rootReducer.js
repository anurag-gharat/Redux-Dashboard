import {combineReducers} from 'redux'
import userReducer from './User/userReducer'
import postsReducer from './Posts/postsReducer'


const rootReducer=combineReducers({
    user:userReducer,
    posts:postsReducer
})

export default rootReducer