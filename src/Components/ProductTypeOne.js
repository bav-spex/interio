import React, { useState } from "react";
import "./../SCSS/ProductComponent/_productComponent.scss";
import "./../SCSS/_base.scss";
import empty_favourite from "./../Assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../Assets/Icon/fulfill_favourite.svg";

function ProductTypeOne({ product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="product__block">
      <div className="product__header">
        <div className="product__title__block">
          <p className="product__title">{product.productName.substring(0,14)}</p>
          <p className="product__tagline">{product.productTagline}</p>
        </div>
        <img
          onMouseEnter={() => setIsFavouriteHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsFavouriteHover(false)}
          className={
            !isFavourite
              ? "product__favourite__icon"
              : "product__favourite__icon__disable"
          }
          src={isFavouriteHover ? fulfill_favourite : empty_favourite}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isFavourite
              ? "product__favourite__icon"
              : "product__favourite__icon__disable"
          }
          src={fulfill_favourite}
          alt=""
        />
      </div>
      <p className="product__price">{`$ ${product.price}`}</p>
      <div className="product__image__block">
        <img className="product__image" src={product.images} alt="" />
      </div>
    </div>
  );
}

export default ProductTypeOne;
