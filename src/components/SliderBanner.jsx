import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

function SliderBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSliderButton = (button) => {
    if (button === "left") {
      if (activeSlide <= 0) return setActiveSlide(() => 1);
      return setActiveSlide((state) => state - 1);
    }
    if (button === "right") {
      if (activeSlide >= 1) return setActiveSlide(() => 0);
      return setActiveSlide((state) => state + 1);
    }
  };
  return (
    <div className="w-full h-[250px] mt-4">
      <div className="w-[1000px] h-full mx-auto bg-black overflow-hidden ">
        <div
          className={
            " backdrop-brightness-75 flex flex-row transform duration-200 ease-in-out " +
            " translate-x-[-" +
            activeSlide * 100 +
            "%]"
          }
        >
          <img
            src="/src/assets/vecteezy_light-and-dark-background-random-minimalist-abstract_10481768-1.jpg"
            className="h-full w-full object-cover "
          ></img>
          <img
            src="/src/assets/vecteezy_light-and-dark-background-random-minimalist-abstract_10482354.jpg"
            className="h-full w-full object-cover "
          ></img>
        </div>
        <div className="absolute top-[80px] w-[1000px] h-[250px]  flex justify-between items-center">
          <div
            onClick={() => handleSliderButton("left")}
            className=" ml-4 border-[3px] border-zinc-100 rounded-full hover:cursor-pointer hover:bg-blue-400 hover:bg-opacity-50"
          >
            {" "}
            <MdArrowLeft className="text-4xl text-zinc-100" />
          </div>
          <div>Hello</div>
          <div
            onClick={() => handleSliderButton("right")}
            className=" mr-4 border-[3px] border-zinc-100 rounded-full hover:cursor-pointer hover:bg-blue-400 hover:bg-opacity-50"
          >
            <MdArrowRight className="text-4xl text-zinc-100 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
