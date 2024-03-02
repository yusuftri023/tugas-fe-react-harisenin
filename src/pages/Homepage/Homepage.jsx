/* eslint-disable react/prop-types */

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";
import { useSelector } from "react-redux";
import LoadingContent from "../../components/LoadingContent";
import ErrorContent from "../../components/ErrorContent";
import PostContent from "./PostContent";
import useFetchAllPost from "../../hooks/useFetchAllPost";

function Homepage() {
  const [allPost, isLoading, error] = useFetchAllPost();
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div
      className={
        (theme === "dark" ? "text-zinc-300" : "text-gray-800") +
        "  font-poppins"
      }
    >
      <Header theme={theme}>
        <ThemeSwitchButton />
      </Header>

      <section
        className={
          (theme === "dark" ? "shadow-gray-800 " : "shadow-zinc-700 ") +
          "my-16 w-[1000px]  mx-auto rounded-xl overflow-hidden shadow-sm  drop-shadow-lg"
        }
      >
        {!error && !isLoading ? (
          [...allPost]
            ?.reverse()
            ?.map(({ title, body, id }) => (
              <PostContent key={id} title={title} body={body} theme={theme} />
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
            (theme === "dark" ? "bg-gray-600 " : "bg-blue-100 text-zinc-100 ") +
            "w-full h-14  rounded-b-md "
          }
        ></div>
      </section>
      <Footer theme={theme} />
    </div>
  );
}

export default Homepage;
