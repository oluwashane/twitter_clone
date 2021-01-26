import React from 'react';
import { randomTweet } from '../shared/tweets'
import '../assets/style/feeds.css'

const Feeds = () => {
  return (
    <div className="main_content">
        {randomTweet.map(info => {
          return (
          <div className="feed feedBorder" key={info.id}>
            <div className="feed_avatar">
              <div className="avatar">
                <img src={info.avatar} alt=""/>
              </div>
            </div>

            <div className="feed_main">

              <div className="feed_user">
                <div className="feed_user_details">
                  <span className="name">{info.name}</span> 
                  <span className="username">@{info.username}</span>
                </div>
                <i className="fas fa-ellipsis-h dot"></i>
              </div>

              <div className="feed_text">
                {info.tweet}
              </div>

              <div className="feed_icons">
                <i className="far fa-comment linkIcon"> {info.comments}</i>
                <i className="fas fa-retweet retweet"> {info.retweet}</i>
                <i className="far fa-heart like"> {info.likes}</i>
              </div>
            </div>
          </div>
          )
        })}
    </div>
  )
}

export default Feeds
