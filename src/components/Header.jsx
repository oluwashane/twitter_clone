import '../assets/style/header.css'
import profile_picture from  '../assets/images/profilePic.jpg';

const Header = () => {
  return (
    <div className="_header twitterBackground">
      <div className="main_head">
        <div className="avatar header_avatar">
          <img src={profile_picture} alt=""/>
        </div>
        <h1>Home</h1>
        <i className="far fa-star links"></i>
      </div>
    </div>
  )
}

export default Header
