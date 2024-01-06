import React from "react";
import "./FooterStyle.css";
import { useSelector } from 'react-redux';

const Footer = () => {

  const sidebarData = useSelector((state)=>state.OpenCloseSidebar)
  return (
    <div className={sidebarData===1?"Footter-main-div-Enhance":"Footter-main-div"}>
      <div className="row Footer-top">
        <div className="col-md-8 Footter-sub-top-div-one">
          <h5>BE THE FIRST TO KNOW</h5>
          <p>Sign Up for updates from Brand Infinity</p>
          <div>
            <input type="text" name="" id="" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="col-md-4 Footter-sub-top-div-two">
          <h5>CONTACT US</h5>
          <span>9876543210</span>
          <span>Customer@BrandInfinity.com</span>
          <p>Currency INR</p>
          <div className="contact-us-mobile-footer-line"></div>
          {/* <hr className="contact-us-mobile-footer-line" /> */}
        </div>
      </div>
      <div  className="row Footer-bottom">
        <div  className="col-md-4 Footter-sub-bottom-div-one">
          <h5>meta muse</h5>
          <p>About us</p>
          <p>Stories</p>
          <p>Articians</p>
          <p>Boutiqes</p>
          <p>Contact Us</p>
          <i className="fa-solid fa-angle-down hide-angle-down-large"></i>
        </div>
        <div className="col-md-4 Footter-sub-bottom-div-two">
          <h5>QuickLinks</h5>
          <p>Orders</p>
          <p>Join</p>
          <p>Payment & Pricing</p>
          <p>Return</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <i className="fa-solid fa-angle-down hide-angle-down-large"></i>

        </div>
        <div className="col-md-4 Footter-sub-bottom-div-three">
          <h5>Follow Us</h5>
          <div><i className="fa-brands fa-instagram"></i></div>
          <div><i className="fa-brands fa-linkedin"></i></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
