import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { feedAction } from '../redux/feeds/feeds.slice'

const SingleFeed = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const {info} = props;

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
            <span className="name">{info.name}</span> 
            <span className="username">@{info.username}</span>
          </div>
          <i className="fas fa-ellipsis-h dot"></i>
        </div>

        <div className="feed_text">
          {info.tweet}
        </div>

        <div className="feed_icons">
          <i className="far fa-comment linkIcon" onClick={() => history.push('/comment')}> {props.info.comments}</i>
          <i className="fas fa-retweet retweet" onClick={() => dispatch(feedAction.addRetweet({ id:info.id, currentRetweet:info.retweet }))} > {info.retweet}</i>
          <i className="far fa-heart like" onClick={() => dispatch(feedAction.addLike({ id:info.id, currentLike:info.likes }))} >{info.likes}</i>
        </div>
      </div>
    </div>
  )
}

export default SingleFeed
