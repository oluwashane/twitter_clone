import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../../db/TweetDB'

export const fetchData = createAsyncThunk(
  'tweets/fetchData', async () => {
    const tweets = await db.table('userTweets').toArray()
    return tweets
  }
)

export const addLikeToPost = createAsyncThunk(
  'tweets/addLikeToPost', async (data) => {
    const {id, currentLike} = data;
    await db.table('userTweets').update(id, {like: currentLike + 1})
    return data
  }
)

export const addRetweetToPost = createAsyncThunk(
  'tweets/addRetweetToPost', async (data) => {
    const {id, currentRetweet} = data;
    await db.table('userTweets').update(id, {retweet: currentRetweet + 1})
    return data
  }
)

export const deleteTweet = createAsyncThunk(
  'tweets/deleteTweet', async(data) => {
    await db.table('userTweets').delete(data);
    return data
  }
)

const tweetSlice = createSlice({
  name: 'tweets',
  initialState: {
    loading: false,
    tweets: [],
    error: ''
  },
  reducers: {
    addTweet: (state, action) => {
      db.table('userTweets').add(action.payload);
      return {
        ...state
      }
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true
    },
  
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false
      state.tweets = action.payload
    },
    
    [addLikeToPost.fulfilled]: (state, action) => {
      const { id } = action.payload
      state.tweets = state.tweets.map(tweet => {
        if (tweet.id === id) {
          return {
            ...tweet,
            like: tweet.like + 1
          }
        }
        return tweet
      })
    },
    [addRetweetToPost.fulfilled]: (state, action) => {
      const { id } = action.payload
      state.tweets = state.tweets.map(tweet => {
        if (tweet.id === id) {
          return {
            ...tweet,
            retweet: tweet.retweet + 1
          }
        }
        return tweet
      })
    },

    [deleteTweet.fulfilled]: (state, action) => {
      state.tweets = state.tweets.filter(tweet => tweet.id !== action.payload)
    }
  }
})


const { actions: tweetsAction , reducer: tweetsReducer } = tweetSlice;

export {
  tweetsAction,
  tweetsReducer
}

