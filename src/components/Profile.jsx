import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';  
import Trends from './Trends';
import '../assets/style/profile.css';
import coverPic from '../assets/images/coverPic.jpg';
import profilePic from '../assets/images/profilePic.jpg';

const Profile = () => {
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
                            <i class="far fa-calendar-alt"></i>  Joined  January  2018
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
                            <Link>
                              <div class="active">Tweets</div>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <div>Tweets & replies</div>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <div>Media</div>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <div>Likes</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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
