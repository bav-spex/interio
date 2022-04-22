import React, { useEffect, useRef, useState } from "react";
import "./../SCSS/_navbarWhite.scss";

import navbar_logo from "./../Assets/Logo/navbar_logo.svg";
import search from "./../Assets/Icon/search.svg";
import account from "./../Assets/Icon/account.svg";
import cart from "./../Assets/Icon/cart.svg";
import menu from "./../Assets/Icon/menu.svg";

import { Link } from "react-router-dom";

import category_01 from "./../Assets/Product_Icon/category_01.png";
import category_02 from "./../Assets/Product_Icon/category_02.png";
import category_03 from "./../Assets/Product_Icon/category_03.png";
import category_04 from "./../Assets/Product_Icon/category_04.png";
import category_05 from "./../Assets/Product_Icon/category_05.png";
import category_06 from "./../Assets/Product_Icon/category_06.png";

import Category_Image_01 from "./../Assets/Image/Category_Image_01.jpg";
import Category_Image_02 from "./../Assets/Image/Category_Image_02.jpg";

const categoryDataJSON = [
  {
    id: 1,
    title: "Sofa",
    mainCategoryIcon: category_01,
    mainCategoryImage: Category_Image_01,
    category: [
      {
        id: 1,
        categoryName: "By Size",

        type: [
          "Small & 2 Seater Sofas",
          "3 Seater Sofas",
          "4 Seater Sofas",
          "Armchairs",
        ],
      },
      {
        id: 2,
        categoryName: "By Type",
        type: [
          "Sofa Beds & Chair Beds",
          "Corner Sofas",
          "Modular Sofas",
          "Chaise Longues & Day Beds",
          "Love Seats",
          "Chesterfield Sofas",
        ],
      },
      {
        id: 3,
        categoryName: "By Material",
        type: ["Leather Sofas", "Velvet Sofas", "Fabric Sofas"],
      },
      {
        id: 4,
        categoryName: "Everything Else",
        type: [
          "Custom Made Sofas",
          "Sofa Sizer",
          "Sofa Buying Guide",
          "Sofa Bed Buying Guide",
          "Sofa Care Guide",
          "Virtual Designer",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Lamp",
    mainCategoryIcon: category_02,
    mainCategoryImage: Category_Image_02,
    category: [
      {
        id: 1,
        categoryName: "Lamps",
        type: [
          "Floor Lamps",
          "Table Lamps",
          "Study Lamps",
          "Lampshades",
          "Table Lanterns",
          "Filament Bulbs",
        ],
      },
      {
        id: 2,
        categoryName: "Wall Lights",
        type: [
          "Wall Sconces",
          "Wall Laterns",
          "Picture Lights",
          "Bath Lights",
          "Love Seats",
          "Chesterfield Sofas",
        ],
      },
      {
        id: 3,
        categoryName: "Ceiling Lights",
        type: ["Chandeliers", "Hanging Lights", "Flush Mounts", "Panel Lights"],
      },
      {
        id: 4,
        categoryName: "Outdoor Lights",
        type: [
          "Gate Lights",
          "Outdoor Wall Lights",
          "Outdoor Hanging",
          "Sofa Bed Buying Guide",
          "Garden Lights",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Basket",
    mainCategoryIcon: category_03,
    mainCategoryImage: Category_Image_01,
    category: [
      {
        id: 1,
        categoryName: "By Size",
        type: [
          "Small & 2 Seater Sofas",
          "3 Seater Sofas",
          "4 Seater Sofas",
          "Armchairs",
        ],
      },
      {
        id: 2,
        categoryName: "By Type",
        type: [
          "Sofa Beds & Chair Beds",
          "Corner Sofas",
          "Modular Sofas",
          "Chaise Longues & Day Beds",
          "Love Seats",
          "Chesterfield Sofas",
        ],
      },
      {
        id: 3,
        categoryName: "By Material",
        type: ["Leather Sofas", "Velvet Sofas", "Fabric Sofas"],
      },
      {
        id: 4,
        categoryName: "Everything Else",
        type: [
          "Custom Made Sofas",
          "Sofa Sizer",
          "Sofa Buying Guide",
          "Sofa Bed Buying Guide",
          "Sofa Care Guide",
          "Virtual Designer",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Chair",
    mainCategoryIcon: category_04,
    mainCategoryImage: Category_Image_02,
    category: [
      {
        id: 1,
        categoryName: "Lamps",
        type: [
          "Floor Lamps",
          "Table Lamps",
          "Study Lamps",
          "Lampshades",
          "Table Lanterns",
          "Filament Bulbs",
        ],
      },
      {
        id: 2,
        categoryName: "Wall Lights",
        type: [
          "Wall Sconces",
          "Wall Laterns",
          "Picture Lights",
          "Bath Lights",
          "Love Seats",
          "Chesterfield Sofas",
        ],
      },
      {
        id: 3,
        categoryName: "Ceiling Lights",
        type: ["Chandeliers", "Hanging Lights", "Flush Mounts", "Panel Lights"],
      },
      {
        id: 4,
        categoryName: "Outdoor Lights",
        type: [
          "Gate Lights",
          "Outdoor Wall Lights",
          "Outdoor Hanging",
          "Sofa Bed Buying Guide",
          "Garden Lights",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Table",
    mainCategoryIcon: category_05,
    mainCategoryImage: Category_Image_01,
    category: [
      {
        id: 1,
        categoryName: "By Size",
        type: [
          "Small & 2 Seater Sofas",
          "3 Seater Sofas",
          "4 Seater Sofas",
          "Armchairs",
        ],
      },
      {
        id: 2,
        categoryName: "By Type",
        type: [
          "Sofa Beds & Chair Beds",
          "Corner Sofas",
          "Modular Sofas",
          "Chaise Longues & Day Beds",
          "Love Seats",
          "Chesterfield Sofas",
        ],
      },
      {
        id: 3,
        categoryName: "By Material",
        type: ["Leather Sofas", "Velvet Sofas", "Fabric Sofas"],
      },
      {
        id: 4,
        categoryName: "Everything Else",
        type: [
          "Custom Made Sofas",
          "Sofa Sizer",
          "Sofa Buying Guide",
          "Sofa Bed Buying Guide",
          "Sofa Care Guide",
          "Virtual Designer",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Dining",
    mainCategoryIcon: category_06,
    mainCategoryImage: Category_Image_02,
    category: [
      {
        id: 1,
        categoryName: "Lamps",
        type: [
          "Floor Lamps",
          "Table Lamps",
          "Study Lamps",
          "Lampshades",
          "Table Lanterns",
          "Filament Bulbs",
        ],
      },
      {
        id: 2,
        categoryName: "Wall Lights",
        type: [
          "Wall Sconces",
          "Wall Laterns",
          "Picture Lights",
          "Bath Lights",
          "Love Seats",
          "Chesterfield Sofas",
        ],
      },
      {
        id: 3,
        categoryName: "Ceiling Lights",
        type: ["Chandeliers", "Hanging Lights", "Flush Mounts", "Panel Lights"],
      },
      {
        id: 4,
        categoryName: "Outdoor Lights",
        type: [
          "Gate Lights",
          "Outdoor Wall Lights",
          "Outdoor Hanging",
          "Sofa Bed Buying Guide",
          "Garden Lights",
        ],
      },
    ],
  },
];

function NavbarWhite() {
  const [height, setHeight] = useState(0);
  const [menuIndex, setMenuIndex] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [categoryData, setCategoryData] = useState(categoryDataJSON);
  useEffect(() => {
    const onScroll = () => setHeight(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [window.pageYOffset]);

  useEffect(() => {
    // if (height > navbarRef.current.offsetHeight) {
    if (height > 937) {
      document.querySelector(".white__navbar__container").style.position =
        "fixed";
      document.querySelector(".white__navbar__block").style.backgroundColor = "white";
      document.querySelector(".white__navbar__block").style.boxShadow =
        "rgb(48 48 48 / 11%) 0px 11px 11px 0px";
      document.querySelector(".white__product__popup").style.boxShadow =
        "rgb(48 48 48 / 11%) 0px 0px 11px 0px";
    } else if (height < 937) {
      document.querySelector(".white__navbar__container").style.position =
        "absolute";
      document.querySelector(".white__navbar__block").style.background = "none";
      document.querySelector(".white__navbar__block").style.boxShadow = "";
      document.querySelector(".white__product__popup").style.boxShadow = "";
      //   console.log(document.querySelector(".navbar").style);
    }
  }, [height]);

  useEffect(() => {
    // console.log(menuIndex);
  }, [menuIndex]);

  return (
    <>
      <div className="white__navbar__container">
        <div className="white__navbar__block">
          <div className="white__navbar">
            <Link className="white__navbar__logo__link" to="/">
              <img className="white__navbar__logo" src={navbar_logo} alt="" />
            </Link>

            <div className="white__navbar__link__block">
              <Link className="white__navbar__link" to="/">
                Home
              </Link>
              <div
                onClick={() => setShowPopup(true)}
                onMouseEnter={() => setShowPopup(true)}
                className="white__navbar__link"
                to="/products"
              >
                Products
              </div>

              <Link className="white__navbar__link" to="/about">
                About
              </Link>
              <Link className="white__navbar__link" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="white__navbar__icon__block">
              <img className="white__navbar__icon" src={search} alt="" />
              <img className="white__navbar__icon" src={account} alt="" />
              <img className="white__navbar__icon" src={cart} alt="" />
            </div>
            <div className="responsive__white__navbar__icon__block">
              <img className="white__navbar__icon" src={search} alt="" />
              <img
                onClick={() => setShowPopup(true)}
                className="white__navbar__menu__icon"
                src={menu}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={
            showPopup
              ? "white__product__popup__container"
              : "white__product__popup__container__disable"
          }
        >
          <div
            onMouseLeave={() => setShowPopup(false)}
            className="white__product__popup"
          >
            <div className="row white__product__icon__block">
              {categoryData.map((product, productIndex) => {
                return (
                  <div
                    key={product.id}
                    className="col-4 col-sm-2 white__product__image"
                    onMouseEnter={() => setMenuIndex(product.id)}
                  >
                    <img
                      src={product.mainCategoryIcon}
                      className={
                        product.id === menuIndex
                          ? "white__product__icon__select"
                          : "white__product__icon"
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div className="white__title__block">
              <div className="white__popup__line"></div>
              <div className="row white__product__title__block">
                {categoryData.map((product, productIndex) => {
                  return (
                    <p
                      key={product.id}
                      className={
                        product.id === menuIndex
                          ? "col-4 col-sm-2 white__product__title"
                          : "col-4 col-sm-2 white__product__title__disable"
                      }
                    >
                      {product.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="white__category__popup__container">
              {categoryData.map((product, productIndex) => {
                return (
                  <div
                    key={product.id}
                    className={
                      product.id === menuIndex
                        ? "row white__category__popup__block"
                        : "row white__category__popup__block__disable"
                    }
                  >
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 row  white__category__main__block">
                      {product.category.map((category, categoryIndex) => {
                        return (
                          <div
                            key={category.id}
                            className="col-6col-sm-6 col-md-6 col-lg-3 white__category__block"
                          >
                            <p className="white__category__title">
                              {category.categoryName}
                            </p>
                            {category.type.map((categoryName) => {
                              return (
                                <Link
                                  className="white__product__page__link"
                                  to="/products"
                                >
                                  <p className="white__category">
                                    {categoryName}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    <img
                      className="col-sm-12 col-md-2 white__navabar__image"
                      src={product.mainCategoryImage}
                      alt=""
                    />
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

export default NavbarWhite;
