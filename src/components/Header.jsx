/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { MdAssignment, MdKey, MdSearch } from "react-icons/md";
import { useState } from "react";
import ModalSearchForm from "./ModalSearchForm";

function Header({ theme, children }) {
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header
      className={`${
        theme === "dark" ? "bg-gray-700" : "bg-zinc-100"
      } h-16 w-full top-0 z-100 min-w-[1000px] `}
    >
      <div className="w-[1000px] flex justify-between items-center mx-auto h-full overflow-x-hidden">
        <div
          onClick={() => navigate("/", { replace: true })}
          className="hover:cursor-pointer"
        >
          <img
            src="/src/assets/untitled.svg"
            className=" h-10  text-right inline-block rotate-90 skew-y-12"
          />
          <span className="text-2xl align-middle font-bold font-android text-blue-400 text">
            {" "}
            FORUM KITA
          </span>
        </div>
        <div className=" flex-row flex items-center">
          <div className="">
            <a
              href="/"
              className={
                (theme === "dark"
                  ? "hover:text-white hover:animate-pulse "
                  : "hover:text-black hover:animate-pulse ") + "ml-5"
              }
            >
              <MdKey className=" inline-block mb-1  text-[25px]" /> Log in
            </a>
          </div>
          <div>
            <a
              href="/"
              className={
                (theme === "dark"
                  ? "hover:text-white hover:animate-pulse "
                  : "hover:text-black hover:animate-pulse ") + "ml-5"
              }
            >
              <MdAssignment className="inline-block mb-1  text-[25px]" />{" "}
              Register
            </a>
          </div>

          <div className="overflow-hidden">
            <span
              onClick={() => setSearchActive((searchActive) => !searchActive)}
              className={
                (theme === "dark"
                  ? "hover:text-white hover:animate-pulse "
                  : "hover:text-black hover:animate-pulse  ") +
                " hover:cursor-pointer ml-5"
              }
            >
              <MdSearch className="inline-block mb-1 text-3xl" />
            </span>

            <div
              className={
                (searchActive
                  ? "opacity-100  z-[100] "
                  : " -translate-y-10 opacity-0 z-[-1]") +
                " transform ease-in-out duration-300  absolute  w-0 h-0"
              }
            >
              <ModalSearchForm theme={theme} />
            </div>

            {searchActive && (
              <div
                className="absolute w-[98.9vw] h-[100vh] top-0 left-0 z-[1]  "
                onClick={() => setSearchActive(() => false)}
              ></div>
            )}
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
