import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../store/reducer/themeSlicer";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeSwitchButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);
  const [clicked, setClicked] = useState(false);
  const handleSwitch = () => {
    if (theme === "dark") {
      dispatch(switchTheme("light"));
      localStorage.setItem("theme", "light");
    }
    if (theme === "light") {
      dispatch(switchTheme("dark"));
      localStorage.setItem("theme", "dark");
    }
    setClicked(() => true);
  };
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("bg-[#373737]");
      document.body.classList.add("bg-[#ffffff]");
    }
    if (theme === "dark") {
      document.body.classList.remove("bg-[#ffffff]");
      document.body.classList.add("bg-[#373737]");
    }
  }, [theme]);
  console.log("rendered");
  return (
    <button
      onClick={handleSwitch}
      className={
        (theme === "dark"
          ? "bg-gray-800  hover:bg-[#959595] "
          : "bg-zinc-300 hover:bg-[#959595] ") +
        " w-[80px] h-[40px] rounded-3xl ml-6"
      }
    >
      <div
        className={
          (theme === "dark"
            ? `${
                clicked ? "animate-slide-left " : ""
              }  bg-gray-900 float-right mr-1 hover:bg-gray-700 `
            : ` ${
                clicked ? "animate-slide-right " : ""
              } bg-zinc-100  ml-1 hover:bg-zinc-300 `) +
          " rounded-full w-[33px] h-[33px] flex items-center justify-center"
        }
      >
        {theme === "dark" ? (
          <FaMoon className="text-blue-600" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}
      </div>
    </button>
  );
}

export default ThemeSwitchButton;
