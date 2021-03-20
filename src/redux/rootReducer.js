import { combineReducers } from 'redux'
import likeReducer from './likes/likeReducers'
import feedReducer from './feeds/feedReducers'
import tweetReducer from './tweets/tweetsReducer'

const rootReducer = combineReducers({likes: likeReducer, feeds: feedReducer, tweets: tweetReducer})

export default rootReducer