import React from "react";
import { IoFilm } from "react-icons/io5";

const Heading = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="flex items-center gap-2 text-lg text-blue-700 font-semibold capitalize">
        <IoFilm /> {title}
      </p>
    </div>
  );
};

export default Heading;
