import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/images/profilePic.jpg';
import FeedMore from './FeedMore';
import { connect } from 'react-redux'
import { addLikeProfile, addRetweetProfile } from '../redux'



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

  let domNode = useClickOutside(() => setMenu(false))

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
          <i className="fas fa-retweet retweet" onClick={() => props.addRetweetProfile(props.data.id, props.data.retweet)} >{props.data.retweet}</i>
          <i className="far fa-heart like" onClick={() => props.addLikeProfile(props.data.id, props.data.like)}>{props.data.like}</i>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addLikeProfile: (id, numberOfLike) => dispatch(addLikeProfile(id, numberOfLike)),
    addRetweetProfile: (id, numberOfLike) => dispatch(addRetweetProfile(id, numberOfLike))
  }
}

export default connect(null, mapDispatchToProps)(T)
