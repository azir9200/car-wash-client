import React from "react";
import { Carousel } from "antd";

const Slider: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://i.ibb.co/RhtVvnt/eyosias-g-RZ5s-J7-Hk-Xtw-unsplash.jpg"
        alt="Slide 1"
        className="w-full h-72 object-cover"
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/FWMVpyZ/francis-painchaud-MTeo-QOv-F14-unsplash.jpg"
        alt="Slide 2"
        className="w-full h-72 object-cover"
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/wMdLMwP/francis-painchaud-KQQCo-XZRk-Go-unsplash.jpg"
        alt="Slide 3"
        className="w-full h-72 object-cover"
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/hYmZ14V/brian-lundquist-bh-RTtu-NTHCE-unsplash.jpg"
        alt="Slide 4"
        className="w-full h-72 object-cover"
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/PFz5101/pexels-perfect-lens-6536963.jpg"
        alt="Slide 4"
        className="w-full h-72 object-cover"
      />
    </div>
  </Carousel>
);

export default Slider;
