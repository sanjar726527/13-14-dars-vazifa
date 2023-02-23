import React from "react";
import image from "../../assets/Rectangle.png";
import image1 from "../../assets/Rectangle6.png";
import image2 from "../../assets/Rectangle4.png";
import image3 from "../../assets/Rectangle5.png";
import MainHeaderWrapper from "./MainHeaderWrapper";

export const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <div className="rows">
        <div className="item">
          <img src={image2} alt="image" />
        </div>
      </div>
    </MainHeaderWrapper>
  );
};
