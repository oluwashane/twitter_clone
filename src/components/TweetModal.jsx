import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import profileImage from '../assets/images/profilePic.jpg';
import '../assets/style/tweetmodal.css';

export const TweetPage = ({ postNewTweet }) => {
  const [tweet, setTweet] = useState({
    message: '',
    image: '',
    like: '',
    comment: [],
    retweet: ''
  });

  const resetState = {
    message: '',
    image: '',
    like: '',
    comment: [],
    retweet: ''
  }

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

  function handleOnChange(e) {
    const { name, value } = e.target;
    const newList = {...tweet, [name]: value};
    setTweet(newList);
  }

  function handleOnSubmit(e) {
    if (tweet.message !== '') {
      setTweet(resetState)
      postNewTweet(tweet)
      history.push('/profile');
    } else {
      history.push('/');
    }
    
    e.preventDefault()
  }

  return (
    <div className="tweet_page twitterBackground">

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
            <form onSubmit={handleOnSubmit}>
              <textarea name="message" id="" cols="30" rows="10" onChange={handleOnChange} value={tweet.message} className="f twitterBackground" placeholder="What's happening?"></textarea>
              
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
            </form>
          </div>
        </div>
      </div>

    </div>
    
  )
}
