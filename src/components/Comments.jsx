import React, {useEffect, useRef, useState} from 'react';
import moment from 'moment';
import {useHistory} from 'react-router-dom';
import profileImage from '../assets/images/profilePic.jpg';
import '../assets/style/tweetmodal.css';
import '../assets/style/comments.css'

export const CommentPage = ({ postNewTweet }) => {
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
      const now = moment().format("MMM Do")
      const data = Object.assign({}, tweet, {date: now} )
      postNewTweet(data)
      history.push('/profile');
    } else {
      history.push('/');
    }
    
    e.preventDefault()
  }

  return (
    <div className="tweet_page comment_page twitterBackground" style={{
      height: "100%"
    }}>

      <div ref={tweetModal} className="tweet_modal twitterBackground">
        <div className="tweet_modal_header mob_border_bottom header">
          <i className="fas fa-times links" onClick={() => history.push('/')}></i>
          <i className="fa fa-arrow-left links" aria-hidden="true" onClick={() => history.push('/')}></i>
          <div className="btn">
            <button className="topButton">Reply</button>
          </div>
        </div>

        <div className="_modal_body">
          <div className="user_tweet">
            <div className="_profile">
              <img src={profileImage} alt=""/>
            </div>

            <div className="writeUp">
              <div className="feed_user_details">
                <span className="name">Sarah palmer</span> 
                <span className="username">@sarah</span>
                <span style={{marginLeft: "10px", width:"5px", textOverflow: "ellipsis"}}>data</span>
              </div>
              <p>Offend a JavaScript developer in one line of code.</p>
              <p>Replying to <span className="links">@sarah</span></p>
            </div>
          </div>

          <div className="comment_form">
            <div className="_profile">
              <img src={profileImage} alt=""/>
            </div>

            <div className="comment_form">
              <form onSubmit={handleOnSubmit}>
                <textarea name="message" id="" cols="30" rows="10" onChange={handleOnChange} value={tweet.message} className="f twitterBackground" placeholder="Tweet your reply"></textarea>
                <div className="tweet_modal_bottom mob_border_top">
                  <div className="tweet_icons">
                    <i className="far fa-image"></i>
                    <i className="fas fa-stream"></i>
                    <i className="far fa-smile"></i>
                    <i className="far fa-calendar-check"></i>
                  </div>  
                  <div className="btn">
                    <button type="submit" className="bottomButton">Reply</button>
                  </div>
                </div>
              </form>

            </div>  
          </div>

        </div>
        
      </div>

    </div>
    
  )
}

export default CommentPage
