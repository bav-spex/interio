import React, { useEffect, useRef, useState } from "react";
import "./../SCSS/_navbar.scss";

import navbar_logo from "./../Assets/Logo/navbar_logo.svg";
import search from "./../Assets/Icon/search.svg";
import account from "./../Assets/Icon/account.svg";
import cart from "./../Assets/Icon/cart.svg";

import category_01 from "./../Assets/Product_Icon/category_01.png";
import category_02 from "./../Assets/Product_Icon/category_02.png";
import category_03 from "./../Assets/Product_Icon/category_03.png";
import category_04 from "./../Assets/Product_Icon/category_04.png";
import category_05 from "./../Assets/Product_Icon/category_05.png";
import category_06 from "./../Assets/Product_Icon/category_06.png";

import Navbar_Image from "./../Assets/Image/Navbar_Image.jpg";

import { Link } from "react-router-dom";
function Navbar({ productData }) {
  const [height, setHeight] = useState(0);
  const [menuIndex, setMenuIndex] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeight(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [window.pageYOffset]);

  useEffect(() => {
    // if (height > navbarRef.current.offsetHeight) {
    if (height > 937) {
      document.querySelector(".navbar__container").style.position = "fixed";
      document.querySelector(".navbar").style.backgroundColor = "white";
      document.querySelector(".navbar").style.boxShadow = "rgb(48 48 48 / 11%) 0px 11px 11px 0px";
      document.querySelector(".product__popup").style.boxShadow = "rgb(48 48 48 / 11%) 0px 0px 11px 0px";
    } else if (height < 937) {
        document.querySelector(".navbar__container").style.position = "absolute";
        document.querySelector(".navbar").style.background = "none";
        document.querySelector(".navbar").style.boxShadow = "";
        document.querySelector(".product__popup").style.boxShadow = "";
    //   console.log(document.querySelector(".navbar").style);
    }
  }, [height]);

  useEffect(() => {
    console.log(menuIndex);
  }, [menuIndex]);

  return (
    <>
      <div className="navbar__container">
        <div className="navbar">
          <Link className="navbar__link" to="/">
            <img className="navbar__logo" src={navbar_logo} alt="" />
          </Link>

          <div className="navbar__link__block">
            <Link className="navbar__link" to="/">
              Home
            </Link>
            <div
              onClick={() => setShowPopup(true)}
              onMouseEnter={() => setShowPopup(true)}
              className="navbar__link"
              to="/products"
            >
              Products
            </div>
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
          <div className="navbar__icon__block">
            <img className="navbar__icon" src={search} alt="" />
            <img className="navbar__icon" src={account} alt="" />
            <img className="navbar__icon" src={cart} alt="" />
          </div>
        </div>
        <div
          className={
            showPopup
              ? "product__popup__container"
              : "product__popup__container__disable"
          }
        >
          <div onMouseLeave={() => setShowPopup(false)} className="product__popup">
            <div className="product__icon__block">
              {productData.map((product, productIndex) => {
                return (
                  <div
                    className="product__image"
                    onMouseEnter={() => setMenuIndex(product.id)}
                  >
                    <img
                      key={product.id}
                      src={category_01}
                      className="product_icon"
                    />
                  </div>
                );
              })}
            </div>
            <div className="title__block">
              <div className="popup__line"></div>
              <div className="product__title__block">
                {productData.map((product, productIndex) => {
                  return (
                    <p
                      key={product.id}
                      className={
                        product.id === menuIndex
                          ? "product__title"
                          : "product__title__disable"
                      }
                    >
                      {product.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="category__popup__container">
              {productData.map((product, productIndex) => {
                return (
                  <div
                    className={
                      product.id === menuIndex
                        ? "category__popup__block"
                        : "category__popup__block__disable"
                    }
                  >
                    {product.category.map((category, categoryIndex) => {
                      return (
                        <div key={category.id} className="category__block">
                          <p className="category__title">
                            {category.categoryName}
                          </p>
                          {category.type.map((categoryName) => {
                            return <p className="category">{categoryName}</p>;
                          })}
                        </div>
                      );
                    })}
                    <img className="navabar__image" src={Navbar_Image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
