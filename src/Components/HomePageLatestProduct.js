import React,{useState} from "react";
import ProductTypeFour from "./ProductTypeFour";


import latest_Product_01 from "./../Assets/HomePageLatestProduct/latest_Product_01.png";
import latest_Product_02 from "./../Assets/HomePageLatestProduct/latest_Product_02.png";
import latest_Product_03 from "./../Assets/HomePageLatestProduct/latest_Product_03.png";
import latest_Product_04 from "./../Assets/HomePageLatestProduct/latest_Product_04.png";

const homePageLatestProductsDataJSON = [
  {
    id: 1,
    category: "sofa",
    productName: "Mate Sofa",
    brand: "Solace Craft",
    material: "Polyster",
    size: "XL",
    dimensions: { height: 45, width: 100, depth: 70 },
    sale: 25,
    deliveryHours: 48,
    productTagline: "bluish green couple sofa",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By FurnitureKraft",
    images: latest_Product_01,
    price: 3609.99,
    color: "#FFFF00",
    review: [
      {
        user: "Liza Elizabeth",
        reviewPhotos: [],
        reviewText:
          "Excellent product. The quality is good as expected. Delivery and service was also fast. Good value for money.",
      },
    ],
    isInCart: false,
    isFavourite: false,
  },
  {
    id: 2,
    category: "sofa",
    productName: "Round Sofa",
    brand: "MintWud",
    material: "Teak Wood",
    size: "M",
    dimensions: { height: 35, width: 65, depth: 89 },
    sale: 25,
    deliveryHours: 48,
    productTagline: "grey comfort sofa",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By IKEA",
    images: latest_Product_02,
    price: 4999.99,
    color: "#FF0000",
    review: [
      {
        user: "Liza Elizabeth",
        userImage: "user_01.jpg",
        reviewPhotos: [],
        reviewText:
          "Excellent product. The quality is good as expected. Delivery and service was also fast. Good value for money.",
      },
      {
        user: "Smith David",
        userImage: "user_02.jpg",
        reviewPhotos: [],
        reviewText:
          "I was aprehensive while ordering such a large non returnable piece online but I think home town did a good job for me.",
      },
    ],
    isInCart: false,
    isFavourite: true,
  },
  {
    id: 3,
    category: "sofa",
    productName: "Orange Couple Matte Sofa",
    brand: "CashCreaft",
    material: "Velvet Fabric",
    size: "L",
    dimensions: { height: 50, width: 80, depth: 50 },
    sale: 20,
    deliveryHours: 72,
    productTagline: "Mattese",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By Woodland",
    images: latest_Product_03,
    price: 249.99,
    color: "#0000FF",
    review: [
      {
        user: "Liza Elizabeth",
        reviewPhotos: [],
        reviewText:
          "Excellent product. The quality is good as expected. Delivery and service was also fast. Good value for money.",
      },
    ],
    isInCart: false,
    isFavourite: false,
  },
  {
    id: 4,
    category: "sofa",
    productName: "Orange Couple Matte Sofa",
    brand: "CashCreaft",
    material: "Velvet Fabric",
    size: "L",
    dimensions: { height: 50, width: 80, depth: 50 },
    sale: 20,
    deliveryHours: 72,
    productTagline: "Mattese",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By Woodland",
    images: latest_Product_04,
    price: 249.99,
    color: "#0000FF",
    review: [
      {
        user: "Liza Elizabeth",
        reviewPhotos: [],
        reviewText:
          "Excellent product. The quality is good as expected. Delivery and service was also fast. Good value for money.",
      },
    ],
    isInCart: false,
    isFavourite: false,
  },
];


function HomePageLatestProduct() {
  const [ homePageLatestProductsData,setHomePageLatestProductsData] = useState(homePageLatestProductsDataJSON)
  return (
    <div className="homePageLatestProduct__container">
      <div className="row homePageLatestProduct__block">
        <div className="col-6">
          <div className="row latestProduct__first__row">
            <div className="col-6  latestProduct__title__block">
              <p className="latestProduct__small__title">Latest</p>
              <p className="latestProduct__big__title">Products</p>
              <div className="latestProduct__title__line"></div>
            </div>
            <div className="col-6">
              <ProductTypeFour product={homePageLatestProductsData[0]} />
            </div>
          </div>
          <div className="row latestProduct__second__row">
            <div className="col-6">
              <ProductTypeFour product={homePageLatestProductsData[1]} />
            </div>
            <div className="col-6">
              <ProductTypeFour product={homePageLatestProductsData[2]} />
            </div>
          </div>
        </div>
        <div className="col-6 latestProduct__big__block">
           <img src={homePageLatestProductsData[3].images} alt="" className="latestProduct__big__image" />
        </div>
      </div>
    </div>
  );
}

export default HomePageLatestProduct;
