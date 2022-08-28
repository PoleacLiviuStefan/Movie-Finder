import React, { useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useNavigate } from "react-router";
const SearchBar = (props) => {
  const [showBar, changeShowBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };
  const showSearchBar = () => {
    changeShowBar(true);
  };
  const callSearchFunction = (e) => {
    navigate("");
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <div className="w-full h-full flex  items-center">
      <form className="w-full h-full flex">
        <div className="absolute flex flex-row justify-center top-10 z-20 w-full">
          <input
            value={searchValue}
            onChange={handleSearch}
            type="text"
            placeholder="What do you want to watch today?"
            className={`md:w-[50rem] h-8 relative px-12  text-left cursor-pointer ${
              !showBar ? "hidden" : "animate-[bartoleft_1s_ease-in-out]"
            }`}
          ></input>
          <GiMagnifyingGlass
            onClick={(e) => {
              callSearchFunction(e);
              showSearchBar();
            }}
            className={`relative animate-[appear_1s_ease-in-out] z-20 top-1 left-[-49rem] ${
              showBar ? "text-black " : "text-white animate-bounce"
            } text-2xl `}
          />
        </div>
        <input
          type="submit"
          className="text-white cursor-pointer"
          onClick={callSearchFunction}
          value=""
        />
      </form>
    </div>
  );
};

export default SearchBar;
