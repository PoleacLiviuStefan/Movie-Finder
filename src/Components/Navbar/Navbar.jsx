import React, { useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";

const Navbar = ({ search }) => {
  return (
    <div className="fixed   z-10 top-0 flex flex-row w-full h-40 md:h-24 bg-slate-900 justify-center items-center  ">
      <SearchBar search={search} />
      <SearchHistory />
    </div>
  );
};

export default Navbar;
