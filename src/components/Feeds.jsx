import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/style/feeds.css'
import SingleFeed from './SingleFeed';
import {  fetchDataFeed, loadData, addLike, addRetweet } from '../redux'
import db from '../db/TweetDB';
import loader from '../assets/svg/spinner.svg';

const Feeds = (props) => {
  console.log(props)
  useEffect(() => {
    db.table('randFeeds').count(number => {
      number > 0 ? props.fetchFeed() : props.loadData()
    });
  }, [])

  return (
    <div className="main_content">
      {props.feed.loading ? 
      <div style= {{ width: '50px', margin: "auto"}} >
        <img src={loader} alt="img description" style={{width: "50px", margin: "10px 0"}} />
      </div> : <>
        {props.feed.feed.map(info => {
          return <SingleFeed 
            info={info} 
            key={info.id} 
            addLike={props.addLike}
            addRetweet={props.addRetweet}
          />
        })}
      </>}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    feed: state.feeds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: () => dispatch(fetchDataFeed()),
    loadData: () => dispatch(loadData()),
    addLike: (id, currentLike) => dispatch(addLike(id, currentLike)),
    addRetweet: (id, currentLike) => dispatch(addRetweet(id, currentLike))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds)
