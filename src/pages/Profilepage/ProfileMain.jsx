/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useFetchUserPost from "../../hooks/useFetchUserPost";

function ProfileMain({ theme, id }) {
  const username = useSelector((state) => state.userProfile.data.username);
  const [userPost] = useFetchUserPost(id);
  return (
    <section
      className={
        (theme === "dark"
          ? " bg-gray-700 bg-opacity-80 shadow-gray-800 "
          : "bg-zinc-100 shadow-zinc-700 ") +
        "z-[99] w-[1000px] h-[300px] mx-auto rounded-b-lg mt-10 relative shadow-sm drop-shadow-lg"
      }
    >
      <div className="border-gray-500 w-[1000px] h-[226px] absolute flex flex-row border-b-[1px] ">
        <div
          className={
            (theme === "dark" ? " bg-gray-600 bg-opacity-80" : "bg-blue-100") +
            " w-full h-[40%]  absolute z-[-99]"
          }
        ></div>
        <div className="bg-black m-4  w-[200px] h-[200px] rounded-lg inline-block">
          <img src="/src/assets/react.svg" className="w-full h-full "></img>
        </div>
        <div>
          <div className="mt-4 flex flex-row h-20 w-[768px] justify-between">
            <div className="text-4xl text-blue-500 font-medium brightness-125 ">
              {username}
            </div>
            <div className="bg-gray-400 hover:bg-gray-800 mr-4 text-blue-500 bg-opacity-20  transition-colors duration-150 hover:cursor-pointer  px-2 py-px border-blue-500 border-[1px] h-10 rounded-lg  border-opacity-70 flex items-center">
              {" "}
              Report
            </div>
          </div>
          <div className="mt-4 flex flex-row h-20 w-[500px] mx-auto  justify-evenly">
            <div className="  hover:cursor-pointer flex items-center flex-col my-auto">
              Threads
              <p>{userPost?.length}</p>
            </div>
            <div className="  hover:cursor-pointer  flex items-center flex-col my-auto">
              comments<p>100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileMain;
