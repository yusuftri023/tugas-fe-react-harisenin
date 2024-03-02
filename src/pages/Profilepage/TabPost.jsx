import useFetchUserPost from "../../hooks/useFetchUserPost";
import LoadingContent from "../../components/LoadingContent";
import ErrorContent from "../../components/ErrorContent";
import { useState } from "react";

/* eslint-disable react/prop-types */
function TabPost({ id, theme }) {
  const [userPost, isLoading, error] = useFetchUserPost(id);
  const numPage = new Array(Math.ceil(userPost?.length / 5))
    .fill("")
    .map((_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageContent = [...userPost]
    ?.reverse()
    ?.slice(currentPage * 5, currentPage * 5 + 5);
  return (
    <>
      <section
        className={
          (theme === "dark" ? "shadow-gray-800 " : "shadow-zinc-700 ") +
          "mb-2 w-[1000px]  mx-auto rounded-xl overflow-hidden shadow-sm  drop-shadow-lg"
        }
      >
        {!error && !isLoading ? (
          currentPageContent.map(({ title, body, id }) => (
            <div
              key={id}
              className={`${
                theme === "dark"
                  ? " bg-gray-700 bg-opacity-50 "
                  : "bg-zinc-100  "
              } p-5 border-b-4 border-gray-500 border-opacity-50 animate-fade-in`}
            >
              <h2>
                <a href="/" className=" text-blue-600 hover:underline">
                  {title}
                </a>
              </h2>
              <p>{body.length > 150 ? body.slice(0, 150) + "..." : body}</p>
            </div>
          ))
        ) : isLoading ? (
          <div
            key={id}
            className={`${
              theme === "dark" ? " bg-gray-700 bg-opacity-50" : "bg-zinc-50"
            } p-5 `}
          >
            <LoadingContent />
          </div>
        ) : (
          <div
            key={id}
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
            (theme === "dark" ? "bg-gray-600 " : "bg-blue-100 text-zinc-100 ") +
            "w-full h-14  rounded-b-md "
          }
        ></div>
      </section>
      <div className="w-[1000px] mx-auto flex flex-row">
        {numPage.map((page) => (
          <div
            onClick={() => setCurrentPage(page - 1)}
            key={page}
            className={
              (theme === "dark" ? "border-gray-600 " : "border-zinc-100 ") +
              "border-2 w-8 h-8 mr-px flex justify-center items-center hover:cursor-pointer"
            }
          >
            {page}
          </div>
        ))}
      </div>
    </>
  );
}

export default TabPost;
