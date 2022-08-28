import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchHistory = () => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();
  const listhandle = () => {
    console.log("da");
    setShowList(!showList);
  };
  const sendToLink = () => {
    navigate(`/${localStorage.getItem("history")}`);
  };
  return (
    <div className="relative left-[-10%]  z-30 cursor-pointer">
      <h2 onClick={listhandle} className="text-2xl text-white">
        HISTORY
      </h2>
      <ul className={`${!showList && "hidden"} relative top-10 text-white`}>
        <li onClick={sendToLink}> {localStorage.getItem("history")} </li>
      </ul>
    </div>
  );
};

export default SearchHistory;
