import React, { useState } from "react";
import ProductTypeThree from "./ProductTypeThree";

import lamp_01 from "./../Assets/HomepPageLamp/lamp_01.png";
import lamp_02 from "./../Assets/HomepPageLamp/lamp_02.png";
import lamp_03 from "./../Assets/HomepPageLamp/lamp_03.png";
import lamp_04 from "./../Assets/HomepPageLamp/lamp_04.png";

const homePageLampDataJSON = [
  {
    id: 1,
    category: "lamp",
    productName: "Diamond Lamp",
    brand: "CashCreaft",
    material: "whitish grey",
    size: "L",
    dimensions: { height: 50, width: 80, depth: 50 },
    sale: 20,
    deliveryHours: 72,
    productTagline: "Mattese",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By Woodland",
    images: lamp_01,
    price: 39.99,
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
    id: 2,
    category: "lamp",
    productName: "Dining Lamp",
    brand: "CashCreaft",
    material: "whitish grey",
    size: "L",
    dimensions: { height: 50, width: 80, depth: 50 },
    sale: 20,
    deliveryHours: 72,
    productTagline: "light yellow",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By Woodland",
    images: lamp_02,
    price: 99.99,
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
    id: 3,
    category: "lamp",
    productName: "Ring lamp",
    brand: "CashCreaft",
    material: "whitish grey",
    size: "L",
    dimensions: { height: 50, width: 80, depth: 50 },
    sale: 20,
    deliveryHours: 72,
    productTagline: "whitish ring",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By Woodland",
    images: lamp_03,
    price: 69.99,
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
    category: "lamp",
    productName: "Stone Lamp",
    brand: "CashCreaft",
    material: "whitish grey",
    size: "L",
    dimensions: { height: 50, width: 80, depth: 50 },
    sale: 20,
    deliveryHours: 72,
    productTagline: "yellow white",
    productDescription:
      "Well designed Italian furniture brand to occupy exact space of your modern bedroom & enrich your bedroom lifestyle.",
    manufacturer: "By Woodland",
    images: lamp_04,
    price: 79.99,
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

function HomePageLamp() {
  // console.log(homePageLampData);
  const [homePageLampData,setHomePageLampData]=useState(homePageLampDataJSON)
  return (
    <div className="homePageLamp__container">
      <div className=" homePageLamp__block">
        <div>
          <p className="section__title">Lamp</p>
        </div>
        <div className="row homePageLamps">
          {homePageLampData.map((lamp, lampIndex) => {
            return (
              <div className="col-3">
                <ProductTypeThree product={lamp} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePageLamp;
