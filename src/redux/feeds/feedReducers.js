import { ADD_LIKE, FETCH_REQUEST, FETCH_REQUEST_SUCCESS, RETWEET } from './feedTypes'

const initState = {
  loading: false,
  feed: [],
  error: ''
}

const feedReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_REQUEST_SUCCESS:
      return {
        loading: false,
        feed: [...action.payload],
        error: ''
      }
    case ADD_LIKE:
      return {
        ...state,
        feed: state.feed.map((doc) => {
          if (doc.id === action.payload) {
            return {...doc, likes: doc.likes + 1}
          }
          return doc
        })
      }
    case RETWEET:
      return {
        ...state,
        feed: state.feed.map(feed => {
        if (feed.id === action.payload) {
          return {
            ...feed,
            retweet: feed.retweet + 1
          }
        }
        return feed
        })
      }  
  
    default:
      return state
  }
}

export default feedReducer
