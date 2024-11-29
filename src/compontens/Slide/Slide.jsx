import React from "react";
import "./slide.css";
import product from "./assets/all_product.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slide() {
  const products = product;
  console.log(products);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className=" w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {products.map((pro) => {
            return (
              <div className=" bg-white h-[400px] text-black rounded-xl gap-10">
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl ">
                  <img
                    src={pro.image}
                    alt=""
                    className="h-44 w-44 rounded-full"
                  />{" "}
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-xl font-semibold">{pro.category}</p>
                  <p className="text-center">{pro.name}</p>
                  <button className="bg-indigo-500 text-white"></button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;

// npm i slick-carousel --save
