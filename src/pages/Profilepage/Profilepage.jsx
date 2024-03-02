import { Navigate, Route, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProfilePageTab from "./ProfilePageTab";
import Footer from "../../components/Footer";
import TabProfile from "./TabProfile";
import TabPost from "./TabPost";
import { useSelector } from "react-redux";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";
import ProfileMain from "./ProfileMain";
import Pagenotfound from "../Pagenotfound/Pagenotfound";

function Profilepage() {
  const { id } = useParams();

  console.log(id);

  const activeTab = useSelector((state) => state.tab.activeTab);
  const theme = useSelector((state) => state.theme.currentTheme);
  let tabContent;
  if (activeTab === "Profile")
    tabContent = () => <TabProfile id={id} theme={theme} />;
  if (activeTab === "Postings")
    tabContent = () => <TabPost id={id} theme={theme} />;

  return (
    <div
      className={
        (theme === "dark" ? "text-zinc-300 " : "text-gray-800") +
        "  font-poppins "
      }
    >
      <Header theme={theme}>
        <ThemeSwitchButton theme={theme} />
      </Header>
      <ProfileMain id={id} theme={theme} />
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
  );
}

export default Profilepage;
