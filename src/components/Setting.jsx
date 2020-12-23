import Sidebar from './Sidebar';
import Header from './Header';
import Trends from './Trends';
const Setting = () => {
  return (
    <div className="general">
      <div className="container">
          <div className="main">
            <Header />
          </div> 

          <div className="trend">
            <Trends />
          </div>

          <div className="sideBar">
            <Sidebar />
          </div>
      </div>
    </div>
  )
}

export default Setting