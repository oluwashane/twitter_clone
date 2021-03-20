import React from 'react';
import { connect } from 'react-redux';
import { deleteTweet } from '../redux'
import '../assets/style/feetMore.css';

const FeedMore = (props) => {
  const id = props.currentId;
  
  return (
    <div className="feedOption twitterBackground">

    <li href="" className="delete" onClick={() => props.deleteTweet(id)}><i className="far fa-trash-alt"></i> Delete</li>
    <li href=""><i className="fas fa-thumbtack"></i> Pinned to your profile</li>
    <li href=""><i className="fas fa-code"></i> Embed Tweet</li>
    <li href=""><i className="far fa-chart-bar"></i> View Tweet activity</li>

    
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTweet: id => dispatch(deleteTweet(id))
  }
}

export default connect(null, mapDispatchToProps)(FeedMore)
