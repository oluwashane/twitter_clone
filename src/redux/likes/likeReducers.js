import { ADD_LIKE } from './likeTypes'

const initState = {
  likes: 0
}

const likeReducer = (state = initState, action ) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likes: state.likes + 1
      }
  
    default:
      return state
  }
}

export default likeReducer

// remember to make use of redux thunk for this reducer