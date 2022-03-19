import React, { useEffect, useState } from "react";
import "./../SCSS/_home.scss";
import banner_01 from "./../Assets/Banner/banner_01.jpg";
import banner_02 from "./../Assets/Banner/banner_02.jpg";
function Banner({ banner }) {
  const [index, setIndex] = useState(0);

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
      <div className="banner_container">
        <div className="banner_block">
          {banner.map((ban, banIndex) => {
            let position = "banner nextBanner";
            if (banIndex === index) {
              position = "banner activeBanner";
            }
            if (
              banIndex === index - 1 ||
              (index === 0 && banIndex === banner.length - 1)
            ) {
              position = "banner prevBanner";
            }
            return (
              <div className={position} key={ban.id}>
                <img className="banner_image" src={banner_01} alt="" />
                <p className="banner_title">{ban.title}</p>
              </div>
            );
          })}
        </div>
        <div className="dots_block">
          {banner.map((ban, banIndex) => {
            return (
              <div
                key={ban.id}
                className={ban.id === index + 1 ? "dot dotActive" : "dot"}
                onClick={() => setIndex(banIndex)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Banner;
