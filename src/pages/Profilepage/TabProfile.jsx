/* eslint-disable react/prop-types */
import { useFetchUserDataProfile } from "../../hooks/useFetchUserData";
import ErrorContent from "../../components/ErrorContent";
import LoadingContent from "../../components/LoadingContent";

function TabProfile({ id, theme }) {
  const [userProfile, isLoading, error] = useFetchUserDataProfile(id);
  console.log(userProfile);
  return (
    <>
      {!error && !isLoading ? (
        <div
          className={`${
            theme === "dark" ? " bg-gray-700 bg-opacity-50" : "bg-zinc-50"
          } animate-fade-in h-[400px] `}
        >
          <div className="h-[90%] w-[90%] mx-auto ">
            <div className="my-auto">
              <h1 className="text-3xl py-7">User Details</h1>
              <table>
                <tbody className="text-left">
                  <tr className="py-4">
                    <td className=" py-4 pr-5">Name</td>
                    <td>:</td>
                    <td className="pl-5"> {userProfile.name}</td>
                  </tr>
                  <tr className="py-4">
                    <td className=" py-4 pr-5">Email</td>
                    <td>:</td>
                    <td className="pl-5"> {userProfile.email}</td>
                  </tr>
                  <tr className="py-4">
                    <td className=" py-4 pr-5">Phone Number</td>
                    <td>:</td>
                    <td className="pl-5"> {userProfile.phone}</td>
                  </tr>
                  <tr className="py-4">
                    <td className=" py-4 pr-5">Personal Website</td>
                    <td>:</td>
                    <td className="pl-5"> {userProfile.website}</td>
                  </tr>
                  <tr className="py-4">
                    <td className=" py-4 pr-5">Address</td>
                    <td>:</td>
                    <td className="pl-5">
                      {" "}
                      {userProfile.address?.street +
                        ", " +
                        userProfile.address?.suite +
                        ", " +
                        userProfile.address?.city +
                        ", " +
                        userProfile.address?.zipcode}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* <h1>{userProfile.name}</h1>
              <h1>{userProfile.username}</h1>
              <h1>{userProfile.phone}</h1>
              <h1>{userProfile.email}</h1>
              <h1>{userProfile.website}</h1> */}
            </div>
          </div>
        </div>
      ) : isLoading ? (
        <div
          key={id}
          className={`${
            theme === "dark" ? " bg-gray-700 bg-opacity-50" : "bg-zinc-50"
          } p-5 `}
        >
          <LoadingContent />
        </div>
      ) : (
        <div
          key={id}
          className={`${
            theme === "dark" ? " bg-gray-700 bg-opacity-50" : "bg-zinc-50"
          } p-5 `}
        >
          {" "}
          <ErrorContent error={error} />{" "}
        </div>
      )}
    </>
  );
}

export default TabProfile;
