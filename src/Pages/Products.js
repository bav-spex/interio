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
import NavbarBlack from "../Components/NavbarBlack";
import BannerBlack from "../Components/BannerBlack";
import ProductCategoryAvailable from "../Components/ProductCategoryAvailable";





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



function Products() {


  return (
    <>
      <div className="page">
        <NavbarBlack/>
        <BannerBlack  />
      <ProductCategoryAvailable/>
      <ProductCategoryAvailable/>
      <ProductCategoryAvailable/>
      <ProductCategoryAvailable/>
      <ProductCategoryAvailable/>
        {/* <AdsBannerOne /> */}
       
       
        {/* <NewsLetter  /> */}
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default Products;
