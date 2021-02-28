import React from 'react';
import { connect } from 'react-redux';
import '../assets/style/feeds.css'
import SingleFeed from './SingleFeed';
import { addLike } from '../redux'

const Feeds = (props) => {
  return (
    <div className="main_content">
        {props.feed.data.map(info => {
          return <SingleFeed info={info} key={info.id} addLike={() => props.addLike(info.id)} />
        })}
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
    addLike : (id) => dispatch(addLike(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds)
