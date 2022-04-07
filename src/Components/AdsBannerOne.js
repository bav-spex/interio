import React, { useState } from "react";
import right_arrow from "./../Assets/Icon/right_arrow.svg";

import AdsBanner_01 from "./../Assets/AdsBanner/AdsBanner_01.jpg";
import AdsBanner_02 from "./../Assets/AdsBanner/AdsBanner_02.jpg";
const adsBannerDataJSON = [
  { id: 1, image: AdsBanner_01, url: "./products" },
  { id: 2, image: AdsBanner_02, url: "./products" },
];

function AdsBannerOne() {
  const [adsBannerData,setAdsBannerData]=useState(adsBannerDataJSON[0])
  return (
    <div className="adsBannerOne__container">
      <img src={adsBannerData.image} alt="" />
      <div className="adsBannerOne__explore__button">
        <p className="button__text">Explore</p>
        <img className="button__icon" src={right_arrow} alt="" />
      </div>
    </div>
  );
}

export default AdsBannerOne;
