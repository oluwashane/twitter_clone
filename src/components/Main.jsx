import React, {useState, useEffect} from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Setting from './Setting';
import Message from './Message';
import '../assets/style/dark.scss';
import '../assets/style/default.scss';
import '../assets/style/dim.scss';
import Display from './Display';

const Main = () => {
  const requestTheme = window.localStorage.getItem("currentTheme");
  
  const [theme, setTheme] = useState(requestTheme === null ? 'lightTheme' : requestTheme);

  useEffect(() => {
    window.localStorage.setItem("currentTheme", theme)
  }, [theme])

  function light() {
    setTheme('lightTheme')
  }
  
  function dark() {
    console.log("darktheme")
    setTheme('darkTheme')
  }

  function dim() {
    setTheme('dimTheme')
  }

  
  return (
    <div className={theme}>
      <Switch>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/setting" component={Setting}/>
        <Route exact path="/message" component={Message} />
        <Route exact path="/display" component={() => <Display darkTheme={dark} dimTheme={dim} lightTheme={light}/>} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Main