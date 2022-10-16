import React from "react";
import Search from "./Search";
import TypeList from "./TypeList";
import GenreList from "./GenreList";

const Sidebar = () => {
  return (
    <div className="space-y-4">
      <Search />
      <TypeList />
      <GenreList />
    </div>
  );
};

export default Sidebar;
