/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useFetchUserData } from "../hooks/useFetchUserData";
import Footer from "../components/Footer";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import { useSelector } from "react-redux";
import LoadingContent from "../components/LoadingContent";

function UserList({ id, company, name }) {
  const navigate = useNavigate();
  return (
    <div key={id} className=" block  ">
      <div className="mx-auto bg-gray-200 w-[250px] h-[500px] block rounded-t-2xl overflow-hidden my-10 ">
        <div
          className=""
          onClick={() => {
            navigate(`/profile/${id}`);
          }}
        >
          <img
            src="./src/assets/react.svg"
            className="bg-gray-200 w-full  mx-auto "
          />
          <h2 className=" font-sans m-auto px-5 py-10 text-2xl font-bold h-10">
            {name}
          </h2>
          <table className=" mt-16 mx-5">
            <tbody>
              <tr>
                <td className=" min-w-20 ">Works at</td>
                <td> {company.name}</td>
              </tr>
              <tr>
                <td className=" min-w-20 ">Motto</td>
                <td>{company.catchPhrase}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  const [data, isLoading] = useFetchUserData();
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
      <div className="mt-24 text-5xl text-center">
        <h1>Users List</h1>
      </div>
      <div
        className={` z-0 grid grid-cols-5 grid-rows-${
          data.length / 5
        } justify-center min-h-screen mt-16 mx-auto`}
      >
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 -tranlate-x-1/2">
            <LoadingContent />
          </div>
        ) : (
          data.map(({ name, company, id }) => (
            <UserList key={id} name={name} company={company} id={id} />
          ))
        )}
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default Homepage;
