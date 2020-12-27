import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/images/profilePic.jpg';
import { smallScreen } from '../shared/sidebarmenu'
import '../assets/style/mobsidebar.css'

const MobSidebar = (props) => {
  const {profile, setting, display, analysis} = smallScreen;

  return (
    <div className="">
      <div className="mob_header mob_side mob_border_bottom">
        <h2>Account info</h2>
        <i className="fas fa-times links" onClick={props.closeMenu}></i>
      </div>
      <div className="sidebar_content">
        <div className="nav mob_side mob_border_bottom">
          <div className="nav_avatar">
            <div className="mob_avatar_parent">
              <img src={profilePic} alt=""/>
            </div>
            <i className="fas fa-plus-circle links"></i>
          </div>
          <div className="username">
            <div className="personal_data">
              <div className="name">
                sarah palmer
              </div>
              <div className="username">
                @sarah
              </div>
            </div>
          </div>
          <div className="follow_mob follow_section">
            <p className="following">23 <span>Following</span></p>
            <p className="follower">200 <span>Follower</span></p>
          </div>
          <div>
            <ul>
              {profile.map(data => {
                return (
                  <li key={data.id}>
                    <Link to={`/${data.path}`}>
                      <div className="mini_sidebar twitterSidebar">
                        <div className="">
                        <i className={`icon _icons ${data.icon}`}></i>
                        </div>
                        <div className="data-value">
                          {data.name}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="mob_side mob_border_bottom">
          <ul>
            {
              analysis.map(data => {
                return (
                  <li key={data.id}>
                    <Link to={`/${data.path}`}>
                      <div className="mini_sidebar twitterSidebar">
                        <div className="">
                          <i className={`icon _icons ${data.icon}`}></i>
                        </div>
                        <div className="data-value">
                          {data.name}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="mob_side mob_border_bottom">
          <ul>
            {
              setting.map(data => {
                return (
                  <li key={data.id}>
                    <Link to={`/${data.path}`}>
                      <div className="mini_sidebar twitterSidebar">
                        <div className="">
                          <i className={`icon _icons ${data.icon}`}></i>
                        </div>
                        <div className="data-value">
                          {data.name}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="mob_side mob_border_bottom">
          <ul>
          {
            display.map(data => {
              return (
                <li key={data.id}>
                  <Link to={`/${data.path}`}>
                    <div className="mini_sidebar twitterSidebar">
                      <div className="">
                        <i className={`icon _icons ${data.icon}`}></i>
                      </div>
                      <div className="data-value">
                        {data.name}
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobSidebar
