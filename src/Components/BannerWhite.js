import React, { useEffect, useState } from "react";
import "./../SCSS/_bannerWhite.scss";
import banner_pin  from "./../Assets/Icon/banner_pin.svg";
import banner_01 from "./../Assets/Banner/banner_01.jpg";
import banner_02 from "./../Assets/Banner/banner_02.jpg";

const bannerDataJSON = [
  {
    id: 1,
    title: "The Furniture That Defines You",
    image: banner_01,
  },
  {
    id: 2,
    title: "The Furniture That Defines You",
    image: banner_01,
  },
  {
    id: 3,
    title: "The Furniture That Defines You",
    image: banner_01,
  },
  {
    id: 4,
    title: "The Furniture That Defines You",
    image: banner_01,
  },
];

function BannerWhite() {
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
      <div className="white__banner__container">
        <div className="white__banner__block">
          {banner.map((ban, banIndex) => {
            let position = "white__banner white__nextBanner";
            if (banIndex === index) {
              position = "white__banner white__activeBanner";
            }
            if (
              banIndex === index - 1 ||
              (index === 0 && banIndex === banner.length - 1)
            ) {
              position = "white__banner white__prevBanner";
            }
            return (
              <div className={position} key={ban.id}>
                <img className="white__banner__image" src={ban.image} alt="" />
                {/* <p className="white__banner__title">{ban.title}</p> */}
              </div>
            );
          })}
        </div>
        <div className="white__dots__block">
          {banner.map((ban, banIndex) => {
            return (
              <div
                key={ban.id}
                className={ban.id === index + 1 ? "white__dot white__dotActive" : "white__dot"}
                onClick={() => setIndex(banIndex)}
              ></div>
            );
          })}
        </div>
        <img className="white__banner__pin__block" src={banner_pin}/>
          
      
      </div>
    </>
  );
}

export default BannerWhite;
