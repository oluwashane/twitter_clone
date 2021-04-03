import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../../db/TweetDB'
import { randomTweet } from '../../shared/tweets'

export const fetchData = createAsyncThunk(
  'feeds/fetchData', async () => {
    const feed = await db.table('randFeeds').toArray()
    return feed
  }
)

export const loadData = createAsyncThunk(
  'feeds/loadData', async () => {
    await db.table('randFeeds').bulkAdd(randomTweet)
    return randomTweet
  }
)

const feedSlice = createSlice({
  name: 'feeds',
  initialState: {
    loading: false,
    feeds: [],
    error: ''
  },
  reducers: {
    fetch_request: (state, action) => {
      state = { loading: true, ...state }
    },
    fetch_request_success: (state, action) => {
      return {
        loading: false,
        feeds: [...action.payload],
        error: ''
      }
    },
    addLike: (state, action) => {
      const { id, currentLike } = action.payload
      db.table('randFeeds').update(id, { likes: currentLike + 1 })
      return {
        ...state,
        feeds: state.feeds.map((doc) => {
          if (doc.id === id) {
            return {...doc, likes: doc.likes + 1}
          }
          return doc
        })
      }
    },
    addRetweet: (state, action) => {
      const { id, currentRetweet } = action.payload
      db.table('randFeeds').update(id, { retweet: currentRetweet + 1 })
      return {
        ...state,
        feeds: state.feeds.map((doc) => {
          if (doc.id === id) {
            return {...doc, retweet: doc.retweet + 1}
          }
          return doc
        })
      }
    }
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true
    },
  
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false
      state.feeds = action.payload
    },

    [loadData.pending] : (state, action) => {
      state.loading = true
    },

    [loadData.fulfilled] : (state, action) => {
      state.loading = false
      state.feeds = action.payload    
    }
  }
})


const { actions: feedAction , reducer: feedReducer } = feedSlice;

export {
  feedAction,
  feedReducer
}
