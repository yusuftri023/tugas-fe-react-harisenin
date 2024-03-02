/* eslint-disable react/prop-types */
function PostMain({ theme, user, post }) {
  return (
    <div
      className={
        (theme === "dark"
          ? " bg-gray-700 bg-opacity-80 shadow-gray-800 "
          : "bg-zinc-100 shadow-zinc-700 ") +
        "z-[1] w-[1000px] h-[300px] mx-auto rounded-b-lg mt-10 relative shadow-sm drop-shadow-lg flex flex-row flex-end"
      }
    >
      <div className="w-[20%] h-full flex justify-initial items-center  flex-col">
        <div className="flex  items-start mt-10 bg-gray-800 w-fit h-fit p-2 rounded-full">
          <img src="/src/assets/react.svg" className="w-[100px]"></img>
        </div>
        <div className="mt-4 text-lg text-center">{user?.name}</div>
        <div className="mt-4 text-sm text-center">Posted on:</div>
        <div className="mt-4 text-sm text-center">02-03-2024</div>
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
  );
}

export default PostMain;
