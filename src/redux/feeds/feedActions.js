import db from '../../db/TweetDB'
import { ADD_LIKE, RETWEET, FETCH_REQUEST, FETCH_REQUEST_SUCCESS } from './feedTypes';
import { randomTweet } from '../../shared/tweets'

export const fetchFeed = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchSuccess = data => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: data
  }
}

export const addLike = (id, currentLike) => {
  db.table('randFeeds').update(id, {likes: currentLike + 1}).then(updated => {
    if (updated) {
      console.log("")
    }
  })
  return {
    type: ADD_LIKE,
    payload: id
  }
}

export const addRetweet = (id, currentRetweet) => {
  db.table('randFeeds').update(id, {retweet: currentRetweet + 1}).then(updated => {
    if (updated) {
      console.log("")
    }
  })
  return {
    type: RETWEET,
    payload: id
  }
}

export const loadData = () => {
  return (dispatch) => {
    dispatch(fetchFeed())
    db.table('randFeeds').bulkAdd(randomTweet).then(
      dispatch(fetchSuccess(randomTweet))
    )
  }
}

export const fetchDataFeed = () => {
  return (dispatch) => {
    dispatch(fetchFeed())
    db.table('randFeeds').toArray().then((feed) => {
      dispatch(fetchSuccess(feed))
    })
  }
}

