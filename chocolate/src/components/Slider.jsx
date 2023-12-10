import React from "react";

function Slider({ slides }) {
  return (
    <div className=" overflow-hidden ">
      <div className=" flex">
        {slides.map((slide, index) => {
          return <img className=" " key={index} src={slide} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Slider;
