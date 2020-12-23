import Sidebar from './Sidebar';
import Header from './Header';
import Feeds from './Feeds';
import Trends from './Trends';
// import '../assets/style/dark.scss';
import '../assets/style/main.css';

const Home = () => {
  return (
    <div className="general twitterBackground">
      <div className="container">
          <div className="sideBar">
            <Sidebar />
          </div>
          <div className="main">
            <div className="feed-section defaultBorder">
              <Header />
              <div className="">
                <Feeds />
              </div>
            </div>
            <div className="trend_section">
              <Trends />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
