import React, { useRef, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import '../assets/style/display.css';

const Display = (props) => {
  let displayRef = useRef()
  const history = useHistory();

  useEffect(() => {
    const handle = (event) => {
      if (!displayRef.current.contains(event.target)) {
        return history.push('/home');
      }
    }
    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    } 
  }) 
  
  return (
    <div className="displaySetting setting">
      <div ref={displayRef} className="card twitterBackground">
        <div className="display_header">
          <h2>Customize your view</h2>
          <p>
            Manage your font size, color and background. 
            These settings affect all the Twitter accounts on this browser.
          </p>
        </div>
        <div className="background_sec">
          <p>Background</p>
          <div className="theme_section setting">
              <div className="theme_box default" onClick={props.lightTheme}>
                <span>Default</span>
              </div>
              <div className="theme_box dim" onClick={props.dimTheme}>
                <span>Dim</span>
              </div>
              <div className="theme_box dark" onClick={props.darkTheme} >
                Lights out
              </div>
          </div>
        </div>
        <div className="btn_parent">
          <button onClick={() => {history.push('/home')}}>Done</button>
        </div>
        
      </div>
    </div>
  )
}

export default Display
