import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "../Shared/Heading";
import { IoArrowForward } from "react-icons/io5";
import { useGetGenreQuery } from "../../features/movies/moviesApi";

const GenreList = () => {
  const { isFetching, data, isError, error } = useGetGenreQuery();

  // Decide what to render
  let content = null;

  if (isFetching) content = <p>Loading...</p>;

  if (!isFetching && isError)
    content = (
      <p>
        {error?.data?.status_message
          ? error.data.status_message
          : "Something went wrong"}
      </p>
    );

  if (!isFetching && !isError && data?.genres?.length === 0)
    content = <p>No genre found</p>;

  if (!isFetching && !isError && data?.genres?.length > 0)
    content = data.genres.map((item) => (
      <GenreListItem key={item.id} item={item} />
    ));

  return (
    <div className="space-y-2">
      <Heading title="Movie genres" />
      <div className="flex flex-col gap-2">{content}</div>
    </div>
  );
};

export default GenreList;

const GenreListItem = ({ item }) => {
  const { id, name } = item || {};
  return (
    <NavLink
      to={`/genre/${id}`}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-2 text-sm text-blue-700 font-semibold"
          : "flex items-center gap-2 text-sm"
      }
    >
      <IoArrowForward />
      {name}
    </NavLink>
  );
};
