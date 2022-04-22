import React, { useState } from "react";
import FeatureProducts from "../Components/FeatureProducts";
import HomePageLamp from "../Components/HomePageLamp";
import HomePageProducts from "../Components/HomePageProducts";
import "./../SCSS/_home.scss";







import quality_01 from "./../Assets/Quality/quality_01.png";
import quality_02 from "./../Assets/Quality/quality_02.png";
import right_arrow from "./../Assets/Icon/right_arrow.svg";


import HomePageLatestProduct from "../Components/HomePageLatestProduct";
import AdsBannerOne from "../Components/AdsBannerOne";
import AdsBannerTwo from "../Components/AdsBannerTwo";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import NavbarWhite from "../Components/NavbarWhite";
import BannerWhite from "../Components/BannerWhite";





const qualityData = [
  {
    id: 1,
    title: "Neat & Clean Finishing",
    image: quality_01,
    description:
      "Being work Station specialist Factory we are happy to introduce Home Series Foldable Collection for you Inorder to Set happy home...",
  },
  {
    id: 2,
    title: "Furniture With An Ease Of Comfort",
    image: quality_02,

    description:
      "The master bedroom is on the left of the upstairs corridor. Awash in tones of blue, a four-poster bed takes the centre...",
  },
];



function Home() {


  return (
    <>
      <div className="page">
        <NavbarWhite/>
        <BannerWhite  />
        {/* <BannerWhite  /> */}
        <FeatureProducts  />
        <AdsBannerOne />
        <HomePageProducts />
        {/* <HomePageLamp/> */}
        {/* <HomePageLatestProduct    /> */}
        {/* <AdsBannerTwo /> */}

        {/* <div className="quality__container">
          <div className="row quality__block">
            <div className="col-5 quality__text__box">
              <p className="qaulity__title">{qualityData[0].title}</p>
              <p className="qaulity__description">
                {qualityData[0].description}
              </p>
              <p className="read__more">
                Read More
                <img className="read__more__icon" src={right_arrow} alt="" />
              </p>
            </div>
            <div className="col-7 quality__image__box">
              <img src={qualityData[0].image} alt="" />
            </div>
          </div>
          <div className="row quality__block">
            <div className="col-7 quality__image__box">
              <img src={qualityData[1].image} alt="" />
            </div>
            <div className="col-5 quality__text__box">
              <p className="qaulity__title">{qualityData[1].title}</p>
              <p className="qaulity__description">
                {qualityData[1].description}
              </p>
              <p className="read__more">
                Read More
                <img className="read__more__icon" src={right_arrow} alt="" />
              </p>
            </div>
          </div>
        </div> */}
        {/* <NewsLetter  /> */}
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default Home;
