// loction for the store
// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk'
// import rootReducer from './rootReducer'

// export const store = createStore(rootReducer, applyMiddleware(logger,thunk))

// refactoring to redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import { feedReducer } from './feeds/feeds.slice';
import { tweetsReducer } from './tweets/tweets.slice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    feed: feedReducer,
    tweet: tweetsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
})

export { store }
