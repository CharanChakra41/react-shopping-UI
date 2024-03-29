import React from "react";

const Women = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.womenFashion;
  return (
    <div>
      <div className="BannerSection">
        <div className="bannerBox">
          <img src="Assets/womenBannerr.jpg" alt="banner" />
        </div>
      </div>
      <div className="collectionsection">
        <h2>{title}</h2>
        <div className="mensImages">
          <img src={image1} alt="Image" />
          <img src={image2} alt="Image" />
          <img src={image3} alt="Image" />
          <img src={image4} alt="Image" />
          <img src={image5} alt="Image" />
          <img src={image6} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Women;
