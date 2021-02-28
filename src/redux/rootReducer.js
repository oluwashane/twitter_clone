import { combineReducers } from 'redux'
import likeReducer from './likes/likeReducers'
import feedReducer from './feeds/feedReducers'

const rootReducer = combineReducers({likes: likeReducer, feeds: feedReducer})

export default rootReducer