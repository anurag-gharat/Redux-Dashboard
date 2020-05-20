import {createStore} from 'redux'
import userReucer from './User/userReducer'

const store=createStore(userReucer)

export default store