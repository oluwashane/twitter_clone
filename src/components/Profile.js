import Sidebar from './Sidebar';
import Header from './Header';  
import Trends from './Trends';
import '../assets/style/profile.css';
import coverPic from '../assets/images/coverPic.jpg';
import profilePic from '../assets/images/profilePic.jpg';
import T from './T';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/tweets/tweets.slice';
import loader from '../assets/svg/spinner.svg';


const Profile = () => {

  const personalTweets = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])

  const { tweet } = personalTweets;

  console.log(tweet)
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
                  {tweet.loading ? 
                  <div style= {{ width: '50px', margin: "auto"}} >
                    <img src={loader} alt="img description" style={{width: "50px", margin: "10px 0"}} />
                  </div>
                  : <>
                    {tweet.tweets.map(tweet => <T data={tweet} key={tweet.id}/>)}
                  </>} 
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
