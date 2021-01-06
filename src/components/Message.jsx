import { useHistory, Link } from 'react-router-dom';
import profilePic from '../assets/images/profilePic.jpg';
import Sidebar from './Sidebar';
import '../assets/style/message.scss';
import '../assets/style/setting.scss';

const Setting = () => {
  const history = useHistory();
  return (
    <div className="twitterBackground">
      <div className="container">
        <div className="navbar_section">
          <Sidebar />
        </div>
        <div className="main setting_main">
          <div className="side1 left_border">
            <div className="side_head message_head">
              <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
              <h3>Messages</h3>
              <i class="far fa-envelope links"></i>
            </div>
            <div className="message_sent_users">
              <div className="message_search">
                <div className="side1_item side_item setting_border twitterSidebar">
                  <input type="text" className="setting search_bar" name="" id="" placeholder="Search for people and groups"/>
                </div>
              </div>
              <div className="setting_border twitterSidebar">
                <div className="message_area">

                  <div className="user_profile">
                    <img src={profilePic} alt=""/>
                  </div>

                  <div className="user_message">
                    <div className="user_name">
                      <p>Tom winga</p>
                      <span className="_icons">@Bev</span>
                      <span className="_icons">4th jan </span>
                    </div>
                    <div className="message_summary _icons">
                      <p>please can you share resources...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="side2 left_right_border">
            <div className="message_send">
              <h3>You don't have any selected message</h3>
              <p className="_icons">Choose one from your existing messages, or start a new one.</p>
              <button>New message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting