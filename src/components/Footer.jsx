/* eslint-disable react/prop-types */
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer({ position, theme }) {
  return (
    <footer
      className={` ${position ? position + " w-full" : ""} h-[100px] ${
        theme === "dark" ? "bg-gray-700" : "bg-zinc-100"
      } mt-20 bottom-0  max-w-full  min-w-[1000px]`}
    >
      <div className="mx-auto w-[1000px] flex flex-row justify-between">
        <div>
          <p className=" inline-block my-9">
            &copy; 2024 FORUM KITA, PT Asal Asalan Indonesia, All rights
            reserved
          </p>
        </div>
        <div className="flex items-center">
          {" "}
          <span>Follow us on</span>
          <span className="ml-3">
            <a href="https://www.facebook.com">
              <FaFacebook className=" inline-block ml-2 text-3xl" />
            </a>{" "}
            <a href="https://www.twitter.com">
              <FaTwitter className=" inline-block ml-2 text-3xl" />
            </a>{" "}
            <a href="https://www.youtube.com">
              <FaYoutube className=" inline-block ml-2 text-3xl" />
            </a>{" "}
            <a href="https://www.instagram.com">
              <FaInstagram className=" inline-block ml-2 text-3xl" />
            </a>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
