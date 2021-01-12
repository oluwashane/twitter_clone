import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import TweetButton from './TweetButton';
import { sidebar_menu_items } from '../shared/sidebarmenu';
import profile_picture from  '../assets/images/profilePic.jpg';
import '../assets/style/sidebar.css';
import PopUp from './Pop_up';

function useClickOutside(handler) {
  let domNode = useRef();

  useEffect(() => {
    let handle = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    }
  })

  return domNode
}

const Sidebar = () => {

  const [miniMenu, setMiniMenu] = useState(false);

  function showMenu() {
    console.log("clicked!!!")
    setMiniMenu(!miniMenu);
  }

  let domNode = useClickOutside(() => setMiniMenu(false))

  return (
    <div className="sidebar_menu twitterSidebar">

      <div className="sidebar_menu_items">

        <div className="logo">
          <i className="fab fa-twitter" id="sidebar_icon"></i>
        </div>

        <ul className="sidebar_list">

          <li className="linkIcon">
            <Link to="/">
              <div className="sidebar_menu_value active">
                <div className="icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="menu_value">
                  home
                </div>
              </div>
            </Link>
          </li>

          {sidebar_menu_items.map(menu => {
              return(
                <li className="linkIcon" key={menu.id}>
                  <Link to={menu.path}>
                    <div className="sidebar_menu_value sidebar_menu_link more">
                      <div className="icon">
                        <i className={menu.icon}></i>
                      </div>
                      <div className="menu_value">
                        {menu.name}
                      </div>
                    </div>
                  </Link>
                </li>
              )
          })}

          <li className="linkIcon">
            
            <div className="sidebar_menu_value sidebar_menu_link more" onClick={showMenu}>
              <div className="icon">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="menu_value">
                  more
              </div>
            </div>
          </li>
          <div ref={domNode} className={miniMenu ? "more_popup" : "hide_popup"}>
              <PopUp />
          </div>
        </ul>

        <div className="tweet">
          <button>tweet</button>
        </div>

        <div className="tweet_tablet">
          <TweetButton size="50" />
        </div>
      </div>

      <div className="user_profile">
        <div className="avatar">
          <img src={profile_picture} alt=""/>
        </div>
        <div className="content">
          <div className="data">
            <div className="name">sarah palmer</div>
            <div className="username">@sarah</div>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
