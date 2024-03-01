import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProfilePageTab from "./ProfilePageTab";
import Footer from "../../components/Footer";
import TabProfile from "./TabProfile";
import TabPost from "./TabPost";
import { useSelector } from "react-redux";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";

function Profilepage() {
  const { id } = useParams();
  const navigate = useNavigate();

  let tabContent;
  const activeTab = useSelector((state) => state.tab.activeTab);
  const theme = useSelector((state) => state.theme.currentTheme);
  const username = useSelector((state) => state.userProfile.data.username);
  if (activeTab === "Profile")
    tabContent = () => <TabProfile id={id} theme={theme} />;
  if (activeTab === "Postings")
    tabContent = () => <TabPost id={id} theme={theme} />;

  return Number.isInteger(Number(id)) ? (
    <div
      className={
        (theme === "dark" ? "text-zinc-300 " : "text-gray-800") +
        "  font-poppins "
      }
    >
      <Header theme={theme}>
        <ThemeSwitchButton />
      </Header>
      <section
        className={
          (theme === "dark"
            ? " bg-gray-700 bg-opacity-80 shadow-gray-800 "
            : "bg-zinc-100 shadow-zinc-700 ") +
          "z-[99] w-[1000px] h-[300px] mx-auto rounded-b-lg mt-24 relative shadow-sm drop-shadow-lg"
        }
      >
        <div className="border-gray-500 w-[1000px] h-[226px] absolute flex flex-row border-b-[1px] ">
          <div
            className={
              (theme === "dark"
                ? " bg-gray-600 bg-opacity-80"
                : "bg-blue-100") + " w-full h-[40%]  absolute z-[-99]"
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
                <p>20</p>
              </div>
              <div className="  hover:cursor-pointer  flex items-center flex-col my-auto">
                comments<p>100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfilePageTab />

      <section
        className={
          (theme === "dark" ? "shadow-gray-800 " : "shadow-zinc-700 ") +
          "mb-16 w-[1000px]  mx-auto rounded-xl overflow-hidden shadow-sm  drop-shadow-lg"
        }
      >
        {tabContent()}
      </section>

      <Footer theme={theme} />
    </div>
  ) : (
    navigate("/*")
  );
}

export default Profilepage;
