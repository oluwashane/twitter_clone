import { ADD_LIKE } from './feedTypes'
import { randomTweet } from '../../shared/tweets'

const initState = {
  data: randomTweet
}

const feedReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        data: state.data.map((doc) => {
          if (doc.id === action.payload) {
            return {...doc, likes: doc.likes + 1}
          }
          return doc
        })
      }
  
    default:
      return state
  }
}

export default feedReducer
