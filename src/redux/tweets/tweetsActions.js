import { ADD_LIKE_TWEET, ADD_TWEET, ADD_RETWEET, DELETE_TWEET, FETCH_REQUEST, FETCH_REQUEST_SUCCESS } from './tweetsTypes'
import db from '../../db/TweetDB'

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchRequestSuccess = (data) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: data
  }
}

export const addTweet = data =>() => {
  
  db.table("userTweets").add(data).then(id => {
    return {
      type: ADD_TWEET,
      payload: {...data, id}
    }
  }).catch((e) => console.log(e))
}

export const deleteTweet = id => {
  db.table("userTweets").delete(id)
  return {
    type: DELETE_TWEET,
    payload: id
  }
}

export const addLikeProfile = (id, currentLike) => {
  db.table('userTweets').update(id, {like: currentLike + 1}).then(updated => {
    if (updated) {
      console.log("")
    }
  })
  return {
    type: ADD_LIKE_TWEET,
    payload: id
  }
}

export const addRetweetProfile = (id, currentRetweet) => {
  db.table('userTweets').update(id, {retweet: currentRetweet + 1}).then(updated => {
    if (updated) {
      console.log("")
    }
  })
  return {
    type: ADD_RETWEET,
    payload: id
  }
}

export const fetchData = () => {
  return (dispatch) => {
    // const db
    dispatch(fetchRequest())
    db.table('userTweets')
    .toArray()
    .then((tweets) => {
      dispatch(fetchRequestSuccess(tweets))
    })
  }
}

