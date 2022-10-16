import React from "react";
import noImage from "../../assets/images/noImage.jpg";
import moment from "moment";
import { IoCalendar } from "react-icons/io5";
import { Link } from "react-router-dom";
import { removeFromWatchlist } from "../../features/watchlist/watchlistSlice";
import { useDispatch } from "react-redux";

const WatchlistItem = ({ item }) => {
  const { id, original_title, release_date, overview, backdrop_path } =
    item || {};

  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(item));
  };

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <div className="flex-shrink-0 rounded-md overflow-hidden w-full md:w-[30%]">
        <img
          src={
            backdrop_path
              ? `http://image.tmdb.org/t/p/w500/${backdrop_path}`
              : noImage
          }
          alt=""
          className="h-full"
        />
      </div>

      <div className="w-full space-y-2">
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

        <div className="flex justify-end gap-2">
          <Link
            to={`/movies/${id}`}
            className="text-xs text-white bg-blue-700 font-semibold px-2 py-1 rounded-md"
          >
            See details
          </Link>
          <button
            onClick={handleRemoveFromWatchlist}
            className="text-xs text-white bg-red-700 font-semibold px-2 py-1 rounded-md"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistItem;
