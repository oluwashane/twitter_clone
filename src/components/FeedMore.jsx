import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTweet } from '../redux/tweets/tweets.slice'
import '../assets/style/feetMore.css';

const FeedMore = (props) => {
  const dispatch = useDispatch();
  const id = props.currentId;
  
  return (
    <div className="feedOption twitterBackground">

    <li href="" className="delete" onClick={() => dispatch(deleteTweet(id))}><i className="far fa-trash-alt"></i> Delete</li>
    <li href=""><i className="fas fa-thumbtack"></i> Pinned to your profile</li>
    <li href=""><i className="fas fa-code"></i> Embed Tweet</li>
    <li href=""><i className="far fa-chart-bar"></i> View Tweet activity</li>

    
    </div>
  )
}


export default FeedMore
