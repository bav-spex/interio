import React, { useState } from "react";
import "./../SCSS/ProductComponent/_productComponent.scss";
import "./../SCSS/_base.scss";
import empty_favourite from "./../Assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../Assets/Icon/fulfill_favourite.svg";
import productType2 from "./../Assets/Image/productType2.png";
function ProductTypeTwo({ product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
// console.log(product.price);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="type2__product__block">
      <div className="type2__product__header">
        <div className="type2__product__title__block">
          <p className="type2__product__title">{product.productName}</p>
          <p className="type2__product__tagline">{product.productTagline}</p>
        </div>
        <img
          onMouseEnter={() => setIsFavouriteHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsFavouriteHover(false)}
          className={
            !isFavourite
              ? "type2__product__favourite__icon"
              : "type2__product__favourite__icon__disable"
          }
          src={isFavouriteHover ? fulfill_favourite : empty_favourite}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isFavourite
              ? "type2__product__favourite__icon"
              : "type2__product__favourite__icon__disable"
          }
          src={fulfill_favourite}
          alt=""
        />
      </div>
      <p className="type2__product__price">{`$ ${product.price}`}</p>
      <div className="type2__product__image__block">
        <img className="type2__product__image" src={productType2} alt="" />
      </div>
    </div>
  );
}

export default ProductTypeTwo;
