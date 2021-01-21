import Sidebar from './Sidebar';
import Header from './Header';  
import Trends from './Trends';
import '../assets/style/profile.css';
import coverPic from '../assets/images/coverPic.jpg';
import profilePic from '../assets/images/profilePic.jpg';

const Profile = ({ userTweets }) => {
  console.log(userTweets)

  return (
    <div className="twitterBackground">
      <div className="container">
          <div className="sideBar">
            <Sidebar />
          </div>

          <div className="main">
            
            <div className="feed-section">
              <Header />
              <div className="feedBorder">
                <div className="user_profile_page">
                    <div className="cover_picture">
                      <img src={coverPic} alt=""/>
                    </div>
                    <div className="user_detail">
                      <div className="profile_pic">
                        <img src={profilePic} alt="" />
                      </div>
                      <div className="user_text">
                        <div className="personal_data">
                          <div className="name">
                            sarah palmer
                          </div>
                          <div className="username">
                            @sarah
                          </div>
                        </div>
                        <div className="bio">
                          <p>Software developer by day learner by night</p>
                          <p className="joined">
                            <i className="far fa-calendar-alt"></i>  Joined  January  2018
                          </p>
                          
                          <div className="follow_section">
                          <p className="following">23 <span>Following</span></p>
                          <p className="follower">200 <span>Follower</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="profile_navigation">
                        <ul>
                          <li>
                              <div className="active">Tweets</div>
                          </li>
                          <li>
                              <div>Tweets & replies</div>
                          </li>
                          <li>
                              <div>Media</div>
                          </li>
                          <li>
                              <div>Likes</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="mainTweet">
                  {userTweets.map(tweet => (
                    <div className="feed feedBorder" key={tweet.id}>
                    <div className="feed_avatar">
                      <div className="avatar">
                        <img src={profilePic} alt=""/>
                      </div>
                    </div>

                    <div className="feed_main">
                      <div className="feed_user">
                        <span className="name">Sarah Palmer</span> 
                        <span className="username">@sarah</span>
                        </div>
                      <div className="feed_text">
                        {tweet.message}
                      </div>

                      <div className="feed_icons">
                        <i className="far fa-comment linkIcon"> {tweet.comment}</i>
                        <i className="fas fa-retweet retweet"> {tweet.retweet}</i>
                        <i className="far fa-heart like"> {tweet.like}</i>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
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

export default Profile
