import React, {useState} from 'react';
import '../assets/style/header.css';
import profile_picture from  '../assets/images/profilePic.jpg';
import MobSidebar from './MobSidebar';

const Header = () => {
  const [menu, setMenu] = useState(false);
  
  function mobMenu() {
    setMenu(!menu)
  }

  return (
    <>
    <div className="_header twitterBackground">
      <div className="header_avatar">
        <img src={profile_picture} alt="" onClick={() => (mobMenu())}/>
      </div>
      <div className="main_head">
        
        <h1>Home</h1>
        <i className="far fa-star links"></i>
      </div>
    </div>
    <div className={menu ? "mobSidebar twitterBackground showSidebar" : "mobSidebar twitterBackground hideSidebar"}>
      <MobSidebar closeMenu={() => (mobMenu())}/>
    </div>
    </>
  )
}

export default Header
