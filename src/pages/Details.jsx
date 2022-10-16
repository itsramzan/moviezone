import React from "react";
import DetailsInfo from "../components/Details/DetailsInfo";
import RelatedMovies from "../components/Details/RelatedMovies";
import Sidebar from "../components/Sidebar/Sidebar";

const Details = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9 space-y-4 bg-white p-4 rounded-md">
        <DetailsInfo />
        <RelatedMovies />
      </div>
      <div className="col-span-12 md:col-span-3 bg-white p-4 rounded-md">
        <Sidebar />
      </div>
    </div>
  );
};

export default Details;
