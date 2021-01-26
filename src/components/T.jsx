import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/images/profilePic.jpg';
import FeedMore from './FeedMore';

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
const T = ({data, deleteTweet}) => {
  const [menu, setMenu] = useState(false);

  function moreOption() {
    setMenu(!menu);
  }

  let domNode = useClickOutside(() => setMenu(false))

  const { id, message, date, comment, like, retweet } = data;
  return (
    <div className="feed feedBorder" key={id}>
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
                              <span style={{marginLeft: "10px", width:"5px", textOverflow: "ellipsis"}}>{date}</span>
                            </div>
                            <div className="dotParent">
                              <i className="fas fa-ellipsis-h dot" onClick={moreOption}></i>
                              <div ref={domNode} className={menu ? "menu_list show" : "menu_list hide" }>
                                <FeedMore  currentId={id} deleteFunc={deleteTweet}/>
                              </div>
                            </div>
                          </div>
                          <div className="feed_text">
                            {message}
                          </div>

                          <div className="feed_icons">
                            <i className="far fa-comment linkIcon"> {comment}</i>
                            <i className="fas fa-retweet retweet"> {retweet}</i>
                            <i className="far fa-heart like"> {like}</i>
                          </div>
                        </div>
            </div>
  )
}

export default T
