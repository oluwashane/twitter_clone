import Dexie from 'dexie';

const db = new Dexie("tweets")

db.version(1).stores({
  userTweets: "++id"
})

export default db;
