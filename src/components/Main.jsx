import React, {useState, useEffect} from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Profile from './Profile';
import Setting from './Setting';
import Message from './Message';
import TweetPage from './TweetModal'
import '../assets/style/dark.scss';
import '../assets/style/default.scss';
import '../assets/style/dim.scss';
import Display from './Display';
import TweetButton from './TweetButton';
import CommentPage from './Comments';



const Main = ({ tweets, load }) => {
  const requestTheme = window.localStorage.getItem("currentTheme");

  const [theme, setTheme] = useState(requestTheme === null ? 'lightTheme' : requestTheme);

  useEffect(() => {
    window.localStorage.setItem("currentTheme", theme);
  }, [theme])

  function light() {
    setTheme('lightTheme')
  }
  
  function dark() {
    setTheme('darkTheme')
  }

  function dim() {
    setTheme('dimTheme')
  }

  return (
    <div className={theme}>
      {/* <CommentPage />  */}
      <Switch>
        <Route exact path="/profile" component={() => <Profile />}/> 
        <Route exact path="/setting" component={Setting}/>
        <Route exact path="/message" component={Message} />
        <Route exact path="/comment" component={CommentPage} />
        <Route exact path="/tweet" component={() => <TweetPage  />} />
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