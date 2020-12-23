import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/style/popup.css';

const PopUp = () => {
  function showTheme() {
    console.log("clicked")
  }

  return (
    <div className="general twitterBackground">
      <div className="mini_layer_menu">
      <ul className="sidebar_list mini_layer_list">
        <li>
          <div className="display">
              <i className="fas fa-cog _icons"></i>
              <p>setting & privacy</p>
          </div>
        </li>
        <li>
          <div className="display">
              <i className="far fa-question-circle _icons"></i>
              <p>Help Center</p>
          </div>
        </li>
        <li>
          <Link to="/display">
          <div className="display" onClick={showTheme}>
              <i className="far fa-edit _icons"></i>
              <p>Display</p>
          </div>
          </Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default PopUp
