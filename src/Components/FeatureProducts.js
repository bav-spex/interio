import React,{useState} from "react";
import ProductTypeOne from "./ProductTypeOne";
import "./../SCSS/_featureProduct.scss";
import ProductTypeTwo from "./ProductTypeTwo";


import Feature_Product_01 from "./../Assets/Image/Feature_Product_01.png";
import Feature_Product_02 from "./../Assets/Image/Feature_Product_02.png";

const featureProductsDataJSON = [
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
    images: Feature_Product_01,
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
    images: Feature_Product_02,
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
    images: Feature_Product_01,
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
    images: Feature_Product_02,
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
function FeatureProducts() {
  const [featureProductsData,setFeatureProductsData]=useState(featureProductsDataJSON)
  return (
    <div className="feature__product__container">
      <div className="row feature__product__block">
        <div className="col-3 md-col-6">
          <ProductTypeOne product={featureProductsData[0]} />
        </div>
        <div className="col-3 md-col-6">
          <ProductTypeOne product={featureProductsData[1]} />
        </div>
        <div className="col-6 md-col-12">
          <ProductTypeTwo product={featureProductsData[2]} />
        </div>
        
      </div>
    </div>
  );
}

export default FeatureProducts;
