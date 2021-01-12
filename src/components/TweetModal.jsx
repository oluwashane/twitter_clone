import React, {useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import profileImage from '../assets/images/profilePic.jpg';
import '../assets/style/tweetmodal.css';

export const TweetPage = () => {
  const tweetModal = useRef();
  const history = useHistory();

  useEffect(() => {
    const handle = (event) => {
      if (!tweetModal.current.contains(event.target)) {
        return history.goBack()
      }
    }

    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    }
  })

  return (
    <div className="tweet_page">

      <div ref={tweetModal} className="tweet_modal twitterBackground">
        <div className="mob_tweet twitterBackground">
  
        </div>
        <div className="tweet_modal_header mob_border_bottom">
          <i class="fas fa-times links" onClick={() => history.push('/')}></i>
        </div>

        <div className="tweet_modal_body">

          <div className="tweet_user_profile">
            <img src={profileImage} alt=""/>
          </div>

          <div className="tweet_form">
            <form>
              <textarea name="" id="" cols="30" rows="10" className="f twitterBackground" placeholder="What's happening?"></textarea>
            </form>
          </div>
        </div>

        <div className="tweet_modal_bottom mob_border_top">

          <div className="tweet_icons">
            <i class="far fa-image"></i>
            <i class="fas fa-stream"></i>
            <i class="far fa-smile"></i>
            <i class="far fa-calendar-check"></i>
          </div>  
          <div className="btn">
            <button type="submit">Tweet</button>
          </div>
        </div>
      </div>

    </div>
    
  )
}
