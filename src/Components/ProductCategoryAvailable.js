import React from "react";
import "./../SCSS/_home.scss";

import productAvailbale_01 from "./../Assets/ProductAvailable/productAvailbale_01.png";
import productAvailbale_02 from "./../Assets/ProductAvailable/productAvailbale_02.png";
import productAvailbale_03 from "./../Assets/ProductAvailable/productAvailbale_03.png";
import productAvailbale_04 from "./../Assets/ProductAvailable/productAvailbale_04.png";
import productAvailbale_05 from "./../Assets/ProductAvailable/productAvailbale_05.png";
import productAvailbale_06 from "./../Assets/ProductAvailable/productAvailbale_06.png";
import productAvailbale_07 from "./../Assets/ProductAvailable/productAvailbale_07.png";
import productAvailbale_08 from "./../Assets/ProductAvailable/productAvailbale_08.png";
import productAvailbale_09 from "./../Assets/ProductAvailable/productAvailbale_09.png";

const ProductCategoryAvailableDataJSON = [
  {
    id: 1,
    categoryName: "Modular Sofas",
    image: productAvailbale_01,
    available: 12,
  },
  {
    id: 2,
    categoryName: "4 Seater Sofas",
    image: productAvailbale_02,
    available: 34,
  },
  {
    id: 3,
    categoryName: "3 Seater Sofas",
    image: productAvailbale_03,
    available: 65,
  },
  {
    id: 4,
    categoryName: "Click Clack Sofas",
    image: productAvailbale_04,
    available: 36,
  },
  {
    id: 5,
    categoryName: "Chaise Lounge",
    image: productAvailbale_05,
    available: 7,
  },
  {
    id: 6,
    categoryName: "2 Seater Sofas",
    image: productAvailbale_06,
    available: 98,
  },
  {
    id: 7,
    categoryName: "Leather Sofas",
    image: productAvailbale_07,
    available: 23,
  },
  {
    id: 8,
    categoryName: "Chesterfield Sofas",
    image: productAvailbale_08,
    available: 6,
  },
  {
    id: 9,
    categoryName: "Sofa Beds",
    image: productAvailbale_09,
    available: 10,
  },
];

function ProductCategoryAvailable() {
  return (
    <div className="productAvailable__container">
      <div className="productAvailable__block">
        <div className="first__row">
          {ProductCategoryAvailableDataJSON.slice(0, 4).map(
            (product, productIndex) => {
              return (
                <div className="available__product__block">
                  <div className="available__product__image__block">
                    <img
                      src={product.image}
                      alt=""
                      className="available__product__image"
                    />
                  </div>
                  <div className="available__product__title__block">
                    <p className="available__product__category__name">
                      {product.categoryName}
                    </p>
                    <p className="available__product__available__number">{`${product.available}+`}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="second__row">
          {ProductCategoryAvailableDataJSON.slice(4, 10).map(
            (product, productIndex) => {
              return (
                <div className="available__product__block">
                  <div className="available__product__image__block">
                    <img
                      src={product.image}
                      alt=""
                      className="available__product__image"
                    />
                  </div>
                  <div className="available__product__title__block">
                    <p className="available__product__category__name">
                      {product.categoryName}
                    </p>
                    <p className="available__product__available__number">{`${product.available}+`}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryAvailable;
