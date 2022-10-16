import React from "react";
import MovieGrid from "../components/Grid/MovieGrid";
import Sidebar from "../components/Sidebar/Sidebar";

const Movies = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9 space-y-4 bg-white p-4 rounded-md">
        <MovieGrid />
      </div>
      <div className="col-span-12 md:col-span-3 bg-white p-4 rounded-md">
        <Sidebar />
      </div>
    </div>
  );
};

export default Movies;
