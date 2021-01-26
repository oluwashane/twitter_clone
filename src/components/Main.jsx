import React, {useState, useEffect} from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Setting from './Setting';
import Message from './Message';
import { TweetPage } from './TweetModal'
import '../assets/style/dark.scss';
import '../assets/style/default.scss';
import '../assets/style/dim.scss';
import Display from './Display';
import TweetButton from './TweetButton';
import db from '../db/TweetDB';
import FeedMore from './FeedMore';



const Main = () => {
  const requestTheme = window.localStorage.getItem("currentTheme");
  
  const [tweet, setTweet] = useState([])
  const [theme, setTheme] = useState(requestTheme === null ? 'lightTheme' : requestTheme);

  useEffect(() => {
    window.localStorage.setItem("currentTheme", theme);
  }, [theme])

  

  useEffect(() => {
    // handle db 
    db.table('userTweets')
    .toArray()
    .then((tweets) => {
        setTweet([...tweets])
    });
    
  },[])
  // db.table('userTweets');
  
  function light() {
    setTheme('lightTheme')
  }
  
  function dark() {
    setTheme('darkTheme')
  }

  function dim() {
    setTheme('dimTheme')
  }

  function addTweet(args) {
    db.table("userTweets").add(args).then(id => {
      setTweet([...tweet, Object.assign({}, args, { id })])
    })
    .catch(e => console.log(e))
  }

  function deleteTweet(id) {
    db.table("userTweets").delete(id).then(() => {
      const newList = tweet.filter((data) => data.id !== id);
      setTweet(newList);
    })
  }

  return (
    <div className={theme}>
      <Switch>
        <Route exact path="/profile" component={() => <Profile newTweet={tweet} deleteTweet={deleteTweet}/>}/>
        <Route exact path="/setting" component={Setting}/>
        <Route exact path="/message" component={Message} />
        <Route exact path="/tweet" component={() => <TweetPage postNewTweet={addTweet} />} />
        <Route exact path="/display" component={() => <Display darkTheme={dark} dimTheme={dim} lightTheme={light}/>} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <div className="tw">
        <TweetButton size="60"/>
      </div>
    </div>
  )
}

export default Main