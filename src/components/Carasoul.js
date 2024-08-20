import React, { useState, useEffect } from "react";
import { carasoul } from "../assets/assets";

const Carasoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = [
    carasoul.mountain_one,
    carasoul.mountain_two,
    carasoul.mountain_three,
    carasoul.mountain_four,
    carasoul.mountain_five,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageDivStyle = {
    height: "60vh",
    backgroundColor: "blue",
    position: "relative",
    backgroundImage: `url(${imageArray[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out",
  };

  return <div style={imageDivStyle}></div>;
};

export default Carasoul;
