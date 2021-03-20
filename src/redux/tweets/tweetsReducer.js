import { ADD_TWEET, ADD_LIKE_TWEET, ADD_RETWEET, DELETE_TWEET, FETCH_REQUEST, FETCH_REQUEST_SUCCESS } from './tweetsTypes';

const initState = {
  loading: false,
  tweets: [],
  error: ''
}

const tweetReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_REQUEST_SUCCESS: 
      return {
        loading: false,
        tweets: action.payload,
        error: ''
      }  
    case ADD_TWEET:
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      }
    case DELETE_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
      }
    case ADD_LIKE_TWEET:
      return {
        ...state,
        tweets: state.tweets.map(tweet => {
          if (tweet.id === action.payload) {
            return {
              ...tweet,
              like: tweet.like + 1
            }
          }
          return tweet
        })
      }
    case ADD_RETWEET:
      return {
        ...state,
        tweets: state.tweets.map(tweet => {
        if (tweet.id === action.payload) {
          return {
            ...tweet,
            retweet: tweet.retweet + 1
          }
        }
        return tweet
        })
      }
    default:
      return state
  }

}

export default tweetReducer
