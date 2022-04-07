import React, { useEffect, useState } from "react";
import "./../SCSS/_bannerBlack.scss";
import white_banner_pin  from "./../Assets/Icon/white_banner_pin.svg";
// import banner_01 from "./../Assets/Banner/banner_01.jpg";
import banner_02 from "./../Assets/Banner/banner_02.jpg";

const bannerDataJSON = [
  {
    id: 1,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
  {
    id: 2,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
  {
    id: 3,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
  {
    id: 4,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
];

function BannerBlack() {
  const [index, setIndex] = useState(0);
  const [banner,setBanner] = useState(bannerDataJSON)

  useEffect(() => {
    if (index > banner.length - 1) {
      let newIndex = 0;
      setIndex(newIndex);
    }
    if (index < 0) {
      let newIndex = banner.length - 1;
      setIndex(newIndex);
    }
  }, [index, banner]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  });

  return (
    <>
      <div className="black__banner__container">
        <div className="black__banner__block">
          {banner.map((ban, banIndex) => {
            let position = "black__banner black__nextBanner";
            if (banIndex === index) {
              position = "black__banner black__activeBanner";
            }
            if (
              banIndex === index - 1 ||
              (index === 0 && banIndex === banner.length - 1)
            ) {
              position = "black__banner black__prevBanner";
            }
            return (
              <div className={position} key={ban.id}>
                <img className="black__banner__image" src={ban.image} alt="" />
                <p className="black__banner__title">{ban.title}</p>
              </div>
            );
          })}
        </div>
        <div className="black__dots__block">
          {banner.map((ban, banIndex) => {
            return (
              <div
                key={ban.id}
                className={ban.id === index + 1 ? "black__dot black__dotActive" : "black__dot"}
                onClick={() => setIndex(banIndex)}
              ></div>
            );
          })}
        </div>
        <img className="black__banner__pin__block" src={white_banner_pin}/>
          
      
      </div>
    </>
  );
}

export default BannerBlack;
