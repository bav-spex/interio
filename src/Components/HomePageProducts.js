import React, { useState } from "react";
import "./../SCSS/ProductComponent/_productComponent.scss";
import HomePageProduct_01 from "./../Assets/HomePageProduct/HomePageProduct_01.jpg";
import HomePageProduct_02 from "./../Assets/HomePageProduct/HomePageProduct_02.jpg";
import HomePageProduct_03 from "./../Assets/HomePageProduct/HomePageProduct_03.jpg";
import HomePageProduct_04 from "./../Assets/HomePageProduct/HomePageProduct_04.jpg";

const homePageProductDataJSON = [
  {
    id: 1,
    category: "Dining Table",
    image: "",
  },
  {
    id: 2,
    category: "Bedroom",
    image: "",
  },
  {
    id: 3,
    category: "Living Room",
    image: "",
  },
  {
    id: 4,
    category: "Comfort Chair",
    image: "",
  },
];
function HomePageProducts() {
  // console.log(homePageProductData);
  const[homePageProductData,setHomePageProductData] = useState(homePageProductDataJSON)
  return (
    <div className="homePageProduct__container">
      <div className=" homePageProduct__block">
        <div>
          <p className="section__title">Products</p>
        </div>
        <div className="homePageProducts">
          <table>
            <tr className="row first__product__box__row">
              <td className="col-3 text__box">Dining Table</td>
              <td className="col-3 image__box">
                <img
                  className="image__box__image"
                  src={HomePageProduct_01}
                  alt=""
                />
              </td>
              <td className="col-3 text__box">Bedroom</td>
              <td className="col-3 image__box">
                <img
                  className="image__box__image"
                  src={HomePageProduct_02}
                  alt=""
                />
              </td>
            </tr>
            <tr className="row second__product__box__row">
              <td className="col-3 image__box">
                <img
                  className="image__box__image"
                  src={HomePageProduct_03}
                  alt=""
                />
              </td>
              <td className="col-3 text__box">Living Room</td>
              <td className="col-3 image__box">
                <img
                  className="image__box__image"
                  src={HomePageProduct_04}
                  alt=""
                />
              </td>
              <td className="col-3 text__box">Comfort Chair</td>
              {/* <td className="box"><img src={product.image} alt=""/></td> */}
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePageProducts;
