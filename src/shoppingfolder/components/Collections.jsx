import React from "react";

const Collections = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.gentsFashion;

  return (
    <div className="collectionsection">
      <h2>{title}</h2>
      <div className="mensImages">
        <img src={image1} alt="image" />
        <img src={image2} alt="image" />
        <img src={image3} alt="image" />
        <img src={image4} alt="image" />
        <img src={image5} alt="image" />
        <img src={image6} alt="image" />
      </div>
    </div>
  );
};

export default Collections;
