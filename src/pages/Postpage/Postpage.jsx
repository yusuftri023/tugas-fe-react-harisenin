import { useParams } from "react-router-dom";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSinglePost } from "../../store/actions/postAction";
import { getComment } from "../../store/actions/commentAction";
import { getUserProfile } from "../../store/actions/userAction";
import NavigateContent from "../../components/NavigateContent";

function Postpage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);
  const [post, setPost] = useState({});
  useEffect(() => {
    dispatch(getSinglePost(id)).then((res) => setPost(res.payload.data));
  }, []);

  const userId = useSelector((state) => state.singlePost.data.userId);
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    dispatch(getComment(id)).then((res) => setComment(res.payload.data));
  }, []);
  useEffect(() => {
    dispatch(getUserProfile(userId)).then((res) => setUser(res.payload?.data));
  }, [userId]);

  return (
    <div
      key={id}
      className={
        (theme === "dark" ? "text-zinc-300 " : "text-gray-800") +
        "  font-poppins "
      }
    >
      <Header theme={theme}>
        <ThemeSwitchButton theme={theme} />
      </Header>
      <NavigateContent currentLocation={post?.title} />
      <div
        className={
          (theme === "dark"
            ? " bg-gray-700 bg-opacity-80 shadow-gray-800 "
            : "bg-zinc-100 shadow-zinc-700 ") +
          "z-[1] w-[1000px] mx-auto rounded-b-lg mt-10 relative shadow-sm drop-shadow-lg flex flex-row flex-end mb-10"
        }
      >
        <div className="w-[20%] h-full flex justify-initial items-center  flex-col">
          <div className="flex  items-start mt-10 bg-gray-800 w-fit h-fit p-2 rounded-full">
            <img src="/src/assets/react.svg" className="w-[100px]"></img>
          </div>
          <div className="mt-4 text-lg text-center w-[150px] break-words">
            {user?.name}
          </div>
          <div className="mt-4 text-sm text-center">Posted on:</div>
          <div className="mt-4 mb-5 text-sm text-center">02-03-2024</div>
        </div>
        <div className="w-[80%] h-full flex justify-between flex-col">
          {" "}
          <div>
            <div className=" w-full mt-10 z-[100]">
              <h1 className="text-3xl text-black z-[200] text-center item">
                {post?.title}
              </h1>
            </div>
            <div className="mt-5 px-10">
              <p>{post?.body}</p>
            </div>
          </div>
          <div className="w-full h-14"></div>
        </div>
      </div>
      <div>
        <h1 className="mx-auto w-[1000px] mb-5 text-3xl">
          Comments {comment?.length}
        </h1>
        {comment?.map(({ name, body, email }) => (
          <>
            <div
              className={
                (theme === "dark"
                  ? " bg-gray-700 bg-opacity-80 shadow-gray-800 "
                  : "bg-zinc-100 shadow-zinc-700 ") +
                "z-[1] w-[1000px]  mx-auto relative shadow-sm drop-shadow-lg flex flex-row flex-end"
              }
            >
              <div className="w-[20%]  flex justify-initial items-center flex-col">
                <div className="flex  items-start mt-10 bg-gray-800 w-fit h-fit p-2 rounded-full">
                  <img src="/src/assets/react.svg" className="w-[100px]"></img>
                </div>
                <div className="mt-4 w-[150px] max-h-[200px]">
                  <p className=" text-lg break-words">{email}</p>
                </div>
                <div className="mt-4 text-sm text-center">Posted on:</div>
                <div className="mt-4 text-sm text-center pb-5">02-03-2024</div>
              </div>
              <div className="w-[80%] h-full flex justify-between flex-col">
                {" "}
                <div>
                  <div className=" w-full mt-10 z-[100]">
                    <h1 className="text-3xl text-black z-[200] text-center item">
                      {name}
                    </h1>
                  </div>
                  <div className="mt-5 px-10">
                    <p>{body}</p>
                  </div>
                </div>
                <div className="w-full h-14"></div>
              </div>
            </div>
          </>
        ))}
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default Postpage;
