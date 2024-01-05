import React, { useState } from "react";
import "./SidebarStyle.css";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SidebarOpenClose } from "../../Redux/action";

export const Sidebar = () => {

  const sidebarDispatch = useDispatch()

  const [toggleSidebar, setToggleSidebar] = useState(false);
  // const [hideSidebar, setHideSidebar] = useState(false);
  console.log(toggleSidebar)

  const toggleSidebarfuncOn = () => {
    setToggleSidebar(true);
  };
  const toggleSidebarfuncOff = () => {
    setToggleSidebar(false);
  };
  const bigScreenSidebarfuncOff = () => {
    setToggleSidebar(true)
    sidebarDispatch(SidebarOpenClose(1))
  };
  const bigcreenSidebarfuncOn = () => {
    setToggleSidebar(false);
    sidebarDispatch(SidebarOpenClose(0))
  };
  return (
    <>
      <div className="side-bar-container-mobile">
        <button
          onMouseEnter={toggleSidebarfuncOn}
          onMouseLeave={toggleSidebarfuncOff}
          className={
            toggleSidebar
              ? "side-bar-mobile side-bar-mobile-active-background"
              : "side-bar-mobile"
          }
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div
        className={
          toggleSidebar
            ? "hide-sidebar sidebar-main-div-show"
            : "sidebar-main-div hide-to-right"
        }
      >
        <button className={toggleSidebar?"Hide-sidebar-big-screen-not-show":'Hide-sidebar-big-screen'} onClick={bigScreenSidebarfuncOff}><i className="fa-solid fa-angle-left"></i></button>
        <button className={toggleSidebar?"show-angle-right":"hide-angle-right"} onClick={bigcreenSidebarfuncOn}><i className='fa-solid fa-angle-right'></i></button>
        <div className="sidebar-items">
          <ul>
            <li className="Sidebar-Home">
              <input style={{marginRight:'0.5vw'}} type="checkbox" name="customize" id="" />
              <label htmlFor="customize"> CUSTOMIZABLE</label>
            <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-About">
              <p>IDEAL FOR <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-contact">
            <p>OCCASION <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-Orders">
            <p>WORK <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-Orders">
            <p>FABRIC <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-Orders">
            <p>SEGMENT <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-Orders">
            <p>SUITABLE FOR <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-Orders">
            <p>RAW MATERIALS <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
            <li className="Sidebar-Orders">
            <p>PATTERN <span><i class="fa-solid fa-angle-down"></i></span></p>
              <hr style={{width:'80%'}}/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
