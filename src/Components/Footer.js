import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "./../Assets/Logo/footer_logo.svg";

import youtube_icon from "./../Assets/Icon/youtube_icon.svg";
import facebook_icon from "./../Assets/Icon/facebook_icon.svg";
import instagram_icon from "./../Assets/Icon/instagram_icon.svg";
import linkedIn_icon from "./../Assets/Icon/linkedIn_icon.svg";
import twitter_icon from "./../Assets/Icon/twitter_icon.svg";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__block">
        <img src={footer_logo} alt="footer_logo" className="footer__logo" />
        <div className="navbar__link__block">
          <Link className="navbar__link" to="/">
            Home
          </Link>
          
          <Link className="navbar__link" to="/products">
          Products
          </Link>
          <Link className="navbar__link" to="/category">
            Category
          </Link>
          <Link className="navbar__link" to="/about">
            About
          </Link>
          <Link className="navbar__link" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="social__link__block">
          <Link className="social__link" to="/">
            <img src={youtube_icon} alt="" />
          </Link>
          <div className="social__link" to="/products">
            <img src={facebook_icon} alt="" />
          </div>
          <Link className="social__link" to="/category">
            <img src={instagram_icon} alt="" />
          </Link>
          <Link className="social__link" to="/about">
            <img src={linkedIn_icon} alt="" />
          </Link>
          <Link className="social__link" to="/contact">
            <img src={twitter_icon} alt="" />
          </Link>
        </div>
        <p className="footer__text">
          The master bedroom is on the left of the upstairs corridor. Awash in
          tones of blue, a four-poster bed takes the centre...
        </p>
      </div>
      <div className="copyright__container">
          <div className="copyright__text">© Copyright Bav_Spex Infotech Ltd.</div>
      </div>
    </div>
  );
}

export default Footer;
