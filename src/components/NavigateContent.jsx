import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function NavigateContent({ currentLocation }) {
  return (
    <div className="w-[1000px] mx-auto h-10 flex items-center mt-5 ">
      <div className="flex ">
        <Link to={"/"}>Home</Link>
        <MdArrowRight className="text-xl" />
      </div>
      <div>{currentLocation} </div>
    </div>
  );
}

export default NavigateContent;
