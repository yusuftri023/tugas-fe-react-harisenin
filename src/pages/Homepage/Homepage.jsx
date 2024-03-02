/* eslint-disable react/prop-types */

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";
import { useSelector } from "react-redux";
import LoadingContent from "../../components/LoadingContent";
import ErrorContent from "../../components/ErrorContent";
import PostContent from "./PostContent";
import useFetchAllPost from "../../hooks/useFetchAllPost";
import SliderBanner from "../../components/SliderBanner";
import { useState } from "react";

function Homepage() {
  const [allPost, isLoading, error] = useFetchAllPost();
  const theme = useSelector((state) => state.theme.currentTheme);
  const numPage = new Array(Math.ceil(allPost?.length / 5))
    .fill("")
    .map((_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageContent = [...allPost]
    ?.reverse()
    ?.slice(currentPage * 5, currentPage * 5 + 5);
  return (
    <div
      className={
        (theme === "dark" ? "text-zinc-300 " : "text-gray-800 ") +
        "  font-poppins"
      }
    >
      <Header theme={theme}>
        <ThemeSwitchButton />
      </Header>
      <SliderBanner />
      <section className="my-16 w-[1000px]  mx-auto">
        <div
          className={
            (theme === "dark" ? "shadow-gray-800 " : "shadow-zinc-700 ") +
            " rounded-xl overflow-hidden shadow-sm  drop-shadow-lg"
          }
        >
          {!error && !isLoading ? (
            [...currentPageContent]?.map(({ title, body, id }) => (
              <PostContent
                key={id}
                id={id}
                title={title}
                body={body}
                theme={theme}
              />
            ))
          ) : isLoading ? (
            <div
              className={`${
                theme === "dark" ? " bg-gray-700 bg-opacity-50" : "bg-zinc-50"
              } p-5 `}
            >
              <LoadingContent />
            </div>
          ) : (
            <div
              className={`${
                theme === "dark" ? " bg-gray-700 bg-opacity-50" : "bg-zinc-50 "
              } p-5 `}
            >
              {" "}
              <ErrorContent error={error} />{" "}
            </div>
          )}
          <div
            className={
              (theme === "dark"
                ? "bg-gray-600 "
                : "bg-blue-100 text-zinc-100 ") + "w-full h-14  rounded-b-md "
            }
          ></div>
        </div>
        <div className="flex flex-row mt-4">
          {numPage.map((page) => (
            <div
              onClick={() => setCurrentPage(page - 1)}
              key={page}
              className={
                (theme === "dark" ? "border-gray-600 " : "border-zinc-400 ") +
                "border-2 w-8 h-8 mr-px flex justify-center items-center hover:cursor-pointer"
              }
            >
              {page}
            </div>
          ))}
        </div>
      </section>
      <Footer theme={theme} />
    </div>
  );
}

export default Homepage;
