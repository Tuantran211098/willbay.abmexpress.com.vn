import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import {Link} from "react-router-dom";
const Navbar = () => {

  // const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
          <div className="top">
              <Link to="/" style={{textDecoration: "none"}}>

            <span className="logo">
              <img src="http://www.abmexpress.com.vn/wp-content/uploads/2023/02/logo.png" style={{width:'90px',height:'50px',objectFit:'contain'}}/>
            </span>
            </Link>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            VietNam
          </div>
          {/* <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({type:"TOGGLE"})}/>
          </div> */}
          <div className="item">
            <FullScreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          {/* <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div> */}
          {/* <div className="item">
            <ListOutLinedIcon className="icon" />
          </div> */}
          <div className="item">
           <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar