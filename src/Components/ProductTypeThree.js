import React, { useState } from "react";
import "./../SCSS/ProductComponent/_productComponent.scss";
import "./../SCSS/_base.scss";
import white_empty_favourite from "./../Assets/Icon/white_empty_favourite.svg";
import white_fulfill_favourite from "./../Assets/Icon/white_fulfill_favourite.svg";
import white_empty_cart from "./../Assets/Icon/white_empty_cart.svg";
import white_fulfill_cart from "./../Assets/Icon/white_fulfill_cart.svg";

function ProductTypeOne({ product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isInCartHover, setIsInCartHover] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const handleInCart = () => {
    setIsInCart(!isInCart);
  };
  return (
    <div className="type3__product__block">
    
        <img className="type3__product__image" src={product.images} alt="" />
      

      <div className="type3__product__header">
        <div className="type3__product__title__block">
          <p className="type3__product__title">
            {product.productName.substring(0, 14)}
          </p>
          <p className="type3__product__tagline">{product.productTagline}</p>
        </div>
      </div>
      <div className="type3__product__footer">
        <p className="type3__product__price">{`$ ${product.price}`}</p>
<div className="type3__product__icon__block">


        <img
          onMouseEnter={() => setIsInCartHover(true)}
          onClick={handleInCart}
          onMouseLeave={() => setIsInCartHover(false)}
          className={
            !isInCart
              ? "type3__product__cart__icon"
              : "type3__product__cart__icon__disable"
          }
          src={isInCartHover ? white_fulfill_cart : white_empty_cart}
          alt=""
        />
        <img
          onClick={handleInCart}
          className={
            isInCart
              ? "type3__product__cart__icon"
              : "type3__product__cart__icon__disable"
          }
          src={white_fulfill_cart}
          alt=""
        />
        <img
          onMouseEnter={() => setIsFavouriteHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsFavouriteHover(false)}
          className={
            !isFavourite
              ? "type3__product__favourite__icon"
              : "type3__product__favourite__icon__disable"
          }
          src={isFavouriteHover ? white_fulfill_favourite : white_empty_favourite}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isFavourite
              ? "type3__product__favourite__icon"
              : "type3__product__favourite__icon__disable"
          }
          src={white_fulfill_favourite}
          alt=""
        />
      </div>
      </div>
    </div>
  );
}

export default ProductTypeOne;
