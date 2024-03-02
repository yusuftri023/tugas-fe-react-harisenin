import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProfilePageTab from "./ProfilePageTab";
import Footer from "../../components/Footer";
import TabProfile from "./TabProfile";
import TabPost from "./TabPost";
import { useSelector } from "react-redux";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";
import ProfileMain from "./ProfileMain";

function Profilepage() {
  const { id } = useParams();
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

      {tabContent()}

      <Footer theme={theme} />
    </div>
  );
}

export default Profilepage;
