import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/style/feeds.css'
import SingleFeed from './SingleFeed';
import db from '../db/TweetDB';
import loader from '../assets/svg/spinner.svg';
import { fetchData, loadData } from '../redux/feeds/feeds.slice';

const Feeds = (props) => {
  const feedData = useSelector(state => state);
  const dispatch = useDispatch()

  useEffect(() => {
    db.table('randFeeds').count(number => {
      number > 0 ? dispatch(fetchData()) : dispatch(loadData())
    });
    
    
  }, [dispatch])
  
  return (
    <div className="main_content">
      {feedData.feed.loading ? 
      <div style= {{ width: '50px', margin: "auto"}} >
        <img src={loader} alt="img description" style={{width: "50px", margin: "10px 0"}} />
      </div> : <>
        {feedData.feed.feeds.map(info => <SingleFeed info={info} key={info.id}/>)}
      </>}
    </div>
  )

}

export default Feeds
