import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchHistory = () => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();
  const listhandle = () => {
    console.log("da");
    console.log(localStorage.getItem("historyimage"));
    setShowList(!showList);
  };
  const sendToLink = () => {
    navigate(`/${localStorage.getItem("history")}`);
  };
  return (
    <div className="absolute left-4  z-30 cursor-pointer">
      <h2
        onClick={listhandle}
        className="absolute text-xl w-[12rem] font-bold text-white"
      >
        LAST MOVIE
      </h2>
      <ul
        className={`${
          !showList && "hidden"
        } absolute w-[20rem] top-10 text-white shadow-2xl`}
      >
        <li
          onClick={sendToLink}
          className="flex items-center justify-center h-[8rem] bg-slate-500"
        >
          <img
            className="relative  left-4 h-[7rem]"
            src={localStorage.getItem("historyimage")}
          />
          <h2 className=" ml-6 w-[10rem] text-lg mx-4 font-bold">
            {localStorage.getItem("history")}
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default SearchHistory;
