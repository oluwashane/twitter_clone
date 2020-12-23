import '../assets/style/trends.css'
import '../assets/style/dark.scss';

const Trends = () => {
  return (
    <div className="trend_section section_scroll">
      <div className="trend_body">
        {/* search box section */}
        <div className="trend_search_box" id="input_container">
          <i className="fas fa-search"></i>
          <input type="text" name="" id="search" className="twitterTrends" placeholder="Search Twitter"/>
        </div>

        {/* trends for the day */}
        <div className="trend_showcase twitterTrends">
          <div className="trend_showcase_heading layout_text">
            <h2>Trends for you</h2>
            <i className="fas fa-cog links"></i>
          </div>
          <div className="main_trend layout_text feedBorder">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem commodi, sint iure architecto sunt facere?
          </div>
          <div className="trend_showcase_bottom links">
            <p>Show more</p>
          </div>
        </div>

        {/* who to follow */}
        <div className="trend_showcase twitterTrends">
          <div className="trend_showcase_heading layout_text">
            <h2>Who to follow</h2>  
          </div>
          <div className="main_trend layout_text feedBorder">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem commodi, sint iure architecto sunt facere?
          </div>
          <div className="trend_showcase_bottom links">
            <p>Show more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trends