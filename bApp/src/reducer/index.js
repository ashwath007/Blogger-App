import { combineReducers } from 'redux'
import auth from './auth'
import post from './post'
import listing from './listing'


export default combineReducers({
    auth,
    post,
    listing
})