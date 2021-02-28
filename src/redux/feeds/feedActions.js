import { ADD_LIKE } from './feedTypes'

export const addLike = id => {
  return {
    type: ADD_LIKE,
    payload: id
  }
}