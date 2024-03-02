import { useParams } from "react-router-dom";
import ThemeSwitchButton from "../../components/ThemeSwitchButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function Postpage() {
  const { id } = useParams();
  const theme = useSelector((state) => state.theme.currentTheme);
  console.log(id);
  return (
    <>
      {" "}
      <div
        className={
          (theme === "dark" ? "text-zinc-300 " : "text-gray-800") +
          "  font-poppins "
        }
      >
        <Header theme={theme}>
          <ThemeSwitchButton theme={theme} />
        </Header>

        <Footer theme={theme} />
      </div>
    </>
  );
}

export default Postpage;
