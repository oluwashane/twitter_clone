import { useHistory, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { setting } from '../shared/setting'
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
            <div className="side_head">
              <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
              <h3>Settings</h3>
            </div>
            {setting.map(set => {
              return (
                <div className="side1_list" key={set.id}>
                  <Link to={`/${set.path}`}>
                  <div className="side1_item side_item setting_border twitterSidebar">
                    <p>{set.name}</p>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="side2 left_right_border">
            <div className="side_head">
              <h3>Your Account</h3>
            </div>
            <div className="setting_border side_item _icons">
                <p style={{fontSize: "14px"}}>
                See information about your account, download an archive of your data, or learn about your account deactivation options
                </p>
            </div>
            <div className="side2_list">
                <div className="side2_item setting_border">
                  <i className="far fa-user"></i>
                  <div className="text">
                    <h3>Account information</h3>
                    <p className="_icons">
                      See your account information like your phone number 
                      and email address
                    </p>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting