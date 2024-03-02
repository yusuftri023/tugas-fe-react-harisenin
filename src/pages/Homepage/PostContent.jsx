/* eslint-disable react/prop-types */
function PostContent({ title, body, id, theme }) {
  return (
    <div
      className={`${
        theme === "dark" ? " bg-gray-700 bg-opacity-50 " : "bg-zinc-100  "
      } p-5 border-b-4 border-gray-500 border-opacity-50 animate-fade-in`}
    >
      <div className="flex flex-row">
        <img
          src="/src/assets/untitled.svg"
          className="rounded-full w-[50px] "
        ></img>
        <div className="ml-4">
          <h2>
            <a
              href={`/posts/${id}/comments`}
              className=" text-blue-600 hover:underline"
            >
              {title}
            </a>
          </h2>
          <p>{body.length > 150 ? body.slice(0, 150) + "..." : body}</p>
          <p className="text-[12px] mt-5">03-03-2024</p>
        </div>
      </div>
    </div>
  );
}

export default PostContent;
