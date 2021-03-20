import Dexie from 'dexie';

const db = new Dexie("tweets")

db.version(1).stores({
  userTweets: "++id"
})

db.version(2).stores({
  userTweets: "++id",
  randFeeds: "++id"
})

export default db;
