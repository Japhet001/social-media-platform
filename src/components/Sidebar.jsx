import axios from "axios";
import  {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/userContext";
import { FaSearch, FaTelegramPlane } from "react-icons/fa";
import {CgProfile} from "react-icons/cg"
import {MdExplore, MdVideoLibrary} from "react-icons/md"
import {
  FaConfluence,
  FaHome,
  FaLongArrowAltUp,
  FaShareAlt,
  FaUser,
  FaUsers,
  FaVoteYea,
} from "react-icons/fa";
import {
  AiOutlineHome,AiOutlineHeart, AiOutlinePlusSquare
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({setToggleLogin}) => {
  const navigate = useNavigate()
  const {setUser} = useContext(Context)
  const logout = ()=>{
    setUser(null)
    navigate("/login")
  }
  return (
    <div className="b__sidebar">
      <div className="b__sidebar-button">
        <button className="active-btn">
          <AiOutlineHome className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Home
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <FaSearch className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            search 
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <MdExplore className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Explore
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <MdVideoLibrary className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
           Reels
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <FaTelegramPlane className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Messages
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <AiOutlineHeart className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Notification
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <AiOutlinePlusSquare className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Create 
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button className="active-btn">
          <CgProfile className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Profile
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button id="top">
          <FaUsers className="btn-symbol" />
          <span className="b__sidebar-button--text">Followers</span>
          <span id="top__num">12</span>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button id="top">
          <FaVoteYea className="btn-symbol" />
          <span className="b__sidebar-button--text">Likes</span>
          <span id="top__num">22</span>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button id="top">
          <FaConfluence className="btn-symbol" />
          <span className="b__sidebar-button--text">Comments</span>
          <span id="top__num">2</span>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button>
          <FaLongArrowAltUp className="btn-symbol" />
          <span onClick={()=> logout()} className="b__sidebar-button--text">Logout</span> 
          <Link to="/login"  className="b__sidebar-button--text" 
          onClick={()=> setToggleLogin(true)}
          >Login</Link>
        </button>
         
      </div>
    </div>
  );
};

export default Sidebar;
