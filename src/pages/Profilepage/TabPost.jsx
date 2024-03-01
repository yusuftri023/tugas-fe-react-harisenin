import { useFetchUserPost } from "../../hooks/useFetchUserPost";
import LoadingContent from "../../components/LoadingContent";
import ErrorContent from "../../components/ErrorContent";

/* eslint-disable react/prop-types */
function TabPost({ id, theme }) {
  const [userPost, isLoading, error] = useFetchUserPost(id);

  return (
    <>
      {!error && !isLoading ? (
        userPost.map(({ title, body, id }) => (
          <div
            key={id}
            className={`${
              theme === "dark" ? " bg-gray-700 bg-opacity-50 " : "bg-zinc-100  "
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
    </>
  );
}

export default TabPost;
