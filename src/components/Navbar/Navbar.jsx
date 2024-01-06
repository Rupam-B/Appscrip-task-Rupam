import React, { useEffect, useState } from "react";
import "./NavbarStyle.css";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";


const Navbar = () => {
  // States-----
  

  const [newid, setNewid] = useState("");
  const [imgid, setImgid] = useState("");
 


  // Functions-----
  const handleHover = (id) => {
    setNewid(id);
  };
  const handleMouseLeave = () => {
    setNewid("");
  };
  const handleNavImagesin = (imgid) => {
    setImgid(imgid);
  };


  useEffect(() => {
    handleHover(newid);
    handleNavImagesin(imgid);
  }, [newid, imgid]);

  return (
    <>
      <div className="header Navbar-main-div">
        <div className="TopHeader Navbar-background-color-dark">
          <p className="p2 pernia-white-color text-center">
            <i className="fa-solid fa-hands-praying"></i>
            <span className="pernia-black-color">
              <span
                style={{ marginLeft: "0.5vw" }}
                className="pernia-color-red"
              >
                {" "}
                Welcome{" "}
              </span>
            </span>
            <i className="fa-solid fa-hands-praying"></i>
          </p>
        </div>
        <div className="Content layout BreakPointContainer ">
          <div className="Navbar-main-sub-div">
            <div className="sub-div-button-container">
              <button className=" btn Navbar-sub-div-button Navbar-sub-div-button-border-left">
              <i className="fa-solid fa-infinity"></i>
              </button>
            </div>
            <h1>Brand Infinty</h1>
            <div className="Navbar-sub-div-icons">
              <Link>
                <i className="fa-regular fa-heart  mobile-display-none"></i>
              </Link>
              <Link >
                <i className="fa-regular fa-user mobile-display-right-user"></i>
              </Link>
              <Link ><i className="fa-solid fa-magnifying-glass mobile-display-none"></i></Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
              >
                <i className="fa-solid fa-bag-shopping mobile-display-left-cart"></i>
              </Link>
            </div>
          </div>
          <div className="nav-items">
            <ul>
              {NavData.map((mainData, index) => (
                <div key={mainData.id}>
                  <li
                    onMouseEnter={() => handleHover(mainData.id)}
                    onMouseLeave={() => handleMouseLeave(mainData.id)}
                  >
                    {mainData.sareeName}
                  </li>

                  <div
                    onMouseEnter={() => handleHover(mainData.id)}
                    onMouseLeave={() => handleMouseLeave(mainData.id)}
                    className={
                      newid === mainData.id
                        ? "NavData-ontainer NavData-ontainer-active"
                        : "NavData-ontainer NavData-ontainer-Not-active"
                    }
                  >
                    {NavData[index].sareeData.map((items) => (
                      <div
                        key={items.id}
                        className="card NavData-ontainer-card"
                      >
                       <h1>{items}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <hr style={{marginTop:'5vh'}}/>

        <div className="Lowe-navbar-content-added">
          <h2>
            DISCOVER OUR PRODUCTS
          </h2>
          <h6>Welcome to a world of innovation and excellence where every product tells a unique story of quality and functionality. Our diverse range of products is meticulously crafted to cater to your every need, ensuring an unparalleled experience that seamlessly integrates into your daily life. </h6>

        </div>
        <div className="Navbar-lowest-ending-line"></div>
      </div>
    </>
  );
};

export default Navbar;
