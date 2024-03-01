import { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../store/actions/postAction";
import { getUser } from "../store/actions/userAction";
import LoadingContent from "./LoadingContent";

/* eslint-disable react/prop-types */
function ModalSearchForm({ theme }) {
  const dispatch = useDispatch();
  const [searchTitle, setSearchTitle] = useState("");
  const [searchMember, setSearchMember] = useState("");
  const [searchTitleResult, setSearchTitleResult] = useState([]);
  const [searchMemberResult, setSearchMemberResult] = useState([]);
  const isLoadingPost = useSelector((state) => state.postSearch.isLoading);
  const isLoadingMember = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(getPost()).then((res) => {
      setSearchTitleResult(() =>
        res.payload.data.filter((post) => {
          return post?.title?.toLowerCase().includes(searchTitle.toLowerCase());
        })
      );
    });
  }, [searchTitle]);
  useEffect(() => {
    dispatch(getUser()).then((res) => {
      setSearchMemberResult(() =>
        res.payload.data.filter((post) => {
          return post?.username
            ?.toLowerCase()
            .includes(searchMember.toLowerCase());
        })
      );
    });
  }, [searchMember]);

  return (
    <>
      <div
        className={
          (theme === "dark"
            ? "bg-gray-700 shadow-[#3c3c3c] "
            : "bg-zinc-100 shadow-[#c2c2c2] ") +
          "relative -left-64 top-[5px] w-80  h-[400px] block whitespace-nowrap border-t-4 border-blue-500 rounded-lg shadow-md  "
        }
      >
        <div className="w-[100%] h-[400px]  overflow-x-hidden ">
          <div className="text-lg border-b-2 border-gray-500 border-opacity-50 pl-4 py-2">
            Search
          </div>
          <div className="pl-4 mt-2 text-sm">Search by title</div>
          <div className="w-[90%]  mx-auto px-4 mt-2 rounded-lg  overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => setSearchTitle(() => e.target.value)}
              className="w-[100%]  text-black  py-1 focus:outline-none bg-transparent"
            ></input>
          </div>
          <div className="pl-4 mt-2 text-sm">Search by member</div>
          <div className="w-[90%]  mx-auto px-4 mt-2 rounded-lg overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Member..."
              onChange={(e) => setSearchMember(() => e.target.value)}
              className="w-[100%]  text-black  py-1 focus:outline-none bg-transparent"
            ></input>
          </div>
          {searchTitle && (
            <div className="text-lg border-b-2 border-gray-500 border-opacity-50  py-2">
              {" "}
              <h2 className="ml-4">Result</h2>
              <div>
                {searchTitleResult.length > 0 ? (
                  <ol>
                    {!isLoadingPost ? (
                      searchTitleResult.map(({ title, body, id }) => (
                        <li key={id}>
                          <div
                            className={`${
                              theme === "dark"
                                ? " bg-gray-700 bg-opacity-50"
                                : "bg-zinc-50"
                            } py-2  border-b-4 border-gray-500 border-opacity-50 animate-fade-in`}
                          >
                            <h2>
                              <a
                                href="/"
                                className=" text-blue-600 ml-4 hover:underline"
                              >
                                {title}
                              </a>
                            </h2>
                            <p className="ml-4">
                              {body.length > 150
                                ? body.slice(0, 150) + "..."
                                : body}
                            </p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <div
                        className={`${
                          theme === "dark"
                            ? " bg-gray-700 bg-opacity-50"
                            : "bg-zinc-50"
                        } p-5 `}
                      >
                        <LoadingContent />
                      </div>
                    )}
                  </ol>
                ) : (
                  <div className="my-[46px] ml-[50%] translate-x-[-40%]">
                    Nothing found
                  </div>
                )}
              </div>
            </div>
          )}
          {searchMember && (
            <div className="text-lg border-b-2 border-gray-500 border-opacity-50  py-2">
              <div>
                {searchMemberResult.length > 0 ? (
                  <ol>
                    {!isLoadingMember ? (
                      searchMemberResult.map(
                        ({ username, id, company: { name } }) => (
                          <li key={id}>
                            <div
                              className={`${
                                theme === "dark"
                                  ? " bg-gray-700 bg-opacity-50"
                                  : "bg-zinc-50"
                              } py-2     border-b-4 border-gray-500 border-opacity-50 animate-fade-in`}
                            >
                              <h2>
                                <a
                                  href={`/profile/${id}`}
                                  className=" text-blue-600 ml-4 hover:underline"
                                >
                                  {username}
                                </a>
                              </h2>
                              <p className="ml-4">Company: {name}</p>
                            </div>
                          </li>
                        )
                      )
                    ) : (
                      <div
                        className={`${
                          theme === "dark"
                            ? " bg-gray-700 bg-opacity-50"
                            : "bg-zinc-50"
                        } p-5 `}
                      >
                        <LoadingContent />
                      </div>
                    )}
                  </ol>
                ) : (
                  <div className="my-[46px] ml-[50%] translate-x-[-40%]">
                    Nothing found
                  </div>
                )}
              </div>
            </div>
          )}
          <div
            className={
              (theme === "dark"
                ? "bg-gray-600 "
                : "bg-blue-100 text-zinc-100 ") +
              ` ${
                searchTitle || !searchTitleResult.length === 0
                  ? ""
                  : "mt-[170px]"
              }   w-full h-12 relative    rounded-b-md `
            }
          >
            <button className="mt-[7px] text-white  h-8 bg-gradient-to-t from-blue-500 from-10% to-blue-700 transition-all duration-150 active:brightness-105 hover:brightness-[90%] w-24 float-end mr-4 my-auto justify-center rounded-lg items-center ">
              <MdSearch className="inline text-2xl" /> Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSearchForm;
