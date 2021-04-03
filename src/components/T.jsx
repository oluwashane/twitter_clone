import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/images/profilePic.jpg';
import FeedMore from './FeedMore';
import {  useDispatch  } from 'react-redux'
import { tweetsAction, addLikeToPost, addRetweetToPost } from '../redux/tweets/tweets.slice';

function useClickOutside(handler) {
  let domNode = useRef()

  useEffect(() => {
    let handle = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    }
  })

  return domNode
}

const T = (props) => {
  const [menu, setMenu] = useState(false);

  function moreOption() {
    setMenu(!menu);
  }
  console.log(tweetsAction)
  let domNode = useClickOutside(() => setMenu(false))

  const dispatch = useDispatch();

  return (
    <div className="feed feedBoarder">
      <div className="feed_avatar">
        <div className="avatar">
          <img src={profilePic} alt=""/>
        </div>
      </div>

      <div className="feed_main">
        <div className="feed_user">
          <div className="feed_user_details">
            <span className="name">Sarah palmer</span> 
            <span className="username">@sarah</span>
            <span style={{marginLeft: "10px", width:"5px", textOverflow: "ellipsis"}}></span>
          </div>
          <div className="dotParent">
            <i className="fas fa-ellipsis-h dot" onClick={moreOption}></i>
            <div ref={domNode} className={menu ? "menu_list show" : "menu_list hide" }>
              <FeedMore currentId={props.data.id} />
            </div>
          </div>
        </div>
        <div className="feed_text">
          {props.data.message}
        </div>
        <div className="feed_icons">
          <i className="far fa-comment linkIcon">{props.data.comment}</i>
          <i className="fas fa-retweet retweet" onClick={() => dispatch(addRetweetToPost({ id: props.data.id , currentRetweet: props.data.retweet}))}>{props.data.retweet}</i>
          <i className="far fa-heart like" onClick={() => dispatch(addLikeToPost({ id: props.data.id , currentLike: props.data.like}))}>{props.data.like}</i>
        </div>
      </div>
    </div>
  )
}

export default T
