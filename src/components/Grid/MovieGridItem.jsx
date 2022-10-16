import React from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { IoCalendar } from "react-icons/io5";
import noImage from "../../assets/images/noImage.jpg";

const MovieGridItem = ({ item }) => {
  const {
    id,
    original_title,
    release_date,
    overview,
    vote_average,
    poster_path,
  } = item || {};

  return (
    <Link
      to={`/movies/${id}`}
      className="border-2 border-gray-200 rounded-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={
            poster_path
              ? `http://image.tmdb.org/t/p/w500/${poster_path}`
              : noImage
          }
          alt=""
          className="h-full"
        />
        <p className="absolute top-2 right-2 h-8 w-8 flex justify-center items-center text-sm font-semibold bg-white rounded-sm">
          {vote_average.toFixed(1)}
        </p>
      </div>

      <div className="p-4 space-y-2">
        <p className="text-blue-700 font-semibold line-clamp-1">
          {original_title}
        </p>
        <p className="text-sm text-gray-500 text-justify flex items-center gap-2">
          <IoCalendar />
          {moment(release_date).format("MMM Do YY")}
        </p>
        <p className="text-sm text-gray-500 text-justify line-clamp-2">
          {overview}
        </p>
      </div>
    </Link>
  );
};

export default MovieGridItem;
