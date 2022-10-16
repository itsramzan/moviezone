import React from "react";
import { NavLink } from "react-router-dom";
import movieTypes from "../../utils/movieTypes";
import Heading from "../Shared/Heading";
import { IoArrowForward } from "react-icons/io5";

const TypeList = () => {
  return (
    <div className="space-y-2">
      <Heading title="Movie types" />
      <div className="flex flex-col gap-2">
        {movieTypes.map((item) => (
          <TypeListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TypeList;

const TypeListItem = ({ item }) => {
  const { type, title } = item || {};

  return (
    <NavLink
      to={`/type/${type}`}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-2 text-sm text-blue-700 font-semibold"
          : "flex items-center gap-2 text-sm"
      }
    >
      <IoArrowForward />
      {title}
    </NavLink>
  );
};
