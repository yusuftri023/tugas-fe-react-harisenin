/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { selectTab } from "../../store/reducer/tabSlicer";

function ProfilePageTab() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Profile");
  useEffect(() => {
    dispatch(selectTab(activeTab));
  }, [activeTab]);
  return (
    <div className="block mt-6  mb-3">
      <div className=" justify-self-center max-w-[1000px ]  mx-auto">
        {["Profile", "Postings"].map((val, i) => (
          <span
            key={i}
            onClick={() => setActiveTab(() => val)}
            className={
              (activeTab === val
                ? "bg-blue-400 border-b-4 border-blue-500 bg-opacity-30 text-opacity-50 "
                : "") +
              "px-5 py-2 transition ease-in duration-200 hover:bg-blue-500 hover:cursor-pointer hover:text-blue-50 hover:border-b-blue-600 hover:bg-opacity-30 hover:border-b-4"
            }
          >
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProfilePageTab;
