import React from 'react'
import { useHistory } from 'react-router-dom'

const SingleFeed = (props) => {
  const history = useHistory()
  return (
    <div className="feed feedBorder">
      <div className="feed_avatar">
        <div className="avatar">
          <img src={props.info.avatar} alt=""/>
        </div>
      </div>

      <div className="feed_main">

        <div className="feed_user">
          <div className="feed_user_details">
            <span className="name">{props.info.name}</span> 
            <span className="username">@{props.info.username}</span>
          </div>
          <i className="fas fa-ellipsis-h dot"></i>
        </div>

        <div className="feed_text">
          {props.info.tweet}
        </div>

        <div className="feed_icons">
          <i className="far fa-comment linkIcon" onClick={() => history.push('/comment')}> {props.info.comments}</i>
          <i className="fas fa-retweet retweet" onClick={() => props.addRetweet(props.info.id, props.info.retweet)} > {props.info.retweet}</i>
          <i className="far fa-heart like" onClick={() => props.addLike(props.info.id, props.info.likes)} >{props.info.likes}</i>
        </div>
      </div>
    </div>
  )
}

export default SingleFeed
