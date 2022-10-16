import React from "react";
import noImage from "../../assets/images/noImage.jpg";
import moment from "moment";
import currencyFormatter from "../../utils/currencyFormatter";
import convertMinutes from "../../utils/convertMinutes";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../features/watchlist/watchlistSlice";

const DetailsInfoGrid = ({ data }) => {
  const { poster_path } = data;

  return (
    <div className="grid grid-cols-12 items-center gap-4 md:gap-8">
      <DetailsInfoGridLeft poster_path={poster_path} />
      <DetailsInfoGridRight data={data} />
    </div>
  );
};

export default DetailsInfoGrid;

const DetailsInfoGridLeft = ({ poster_path }) => (
  <div className="col-span-12 md:col-span-4">
    <img
      src={
        poster_path ? `http://image.tmdb.org/t/p/w500/${poster_path}` : noImage
      }
      alt=""
      className="h-full rounded-md"
    />
  </div>
);

const DetailsInfoGridRight = ({ data }) => {
  const {
    genres,
    original_title,
    status,
    release_date,
    tagline,
    budget,
    revenue,
    runtime,
    overview,
    vote_average,
    vote_count,
    production_companies,
  } = data;

  const { watchlist } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  const inWatchlist = watchlist.find((item) => item.id === data.id);

  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist(data));
  };

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(data));
  };

  return (
    <div className="col-span-12 md:col-span-8 space-y-2">
      <button
        onClick={() =>
          inWatchlist
            ? handleRemoveFromWatchlist(data)
            : handleAddToWatchlist(data)
        }
        className={`text-xs text-white font-semibold absolute top-1 right-1 px-2 py-1 rounded-md ${
          inWatchlist ? "bg-red-700" : "bg-blue-700"
        }`}
      >
        {inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
      </button>

      <p className="text-3xl text-blue-700 font-bold">{original_title}</p>

      <div className="flex items-center gap-2 flex-wrap">
        {genres?.map((genre) => (
          <p
            key={genre.id}
            className="text-xs text-white font-semibold bg-blue-400 px-2 py-1 rounded-md"
          >
            {genre.name}
          </p>
        ))}
      </div>

      <DetailsInfoGridRightItem text="Status" value={status} />

      <DetailsInfoGridRightItem
        text="Release Date"
        value={moment(release_date).format("MMM Do YY")}
      />

      <DetailsInfoGridRightItem text="Tagline" value={tagline} />

      <DetailsInfoGridRightItem
        text="Budget"
        value={currencyFormatter.format(budget)}
      />

      <DetailsInfoGridRightItem
        text="Revenue"
        value={currencyFormatter.format(revenue)}
      />

      <DetailsInfoGridRightItem
        text="Runtime"
        value={runtime ? convertMinutes(runtime) : "Not available"}
      />

      <DetailsInfoGridRightItem
        text="Overview"
        value={overview ? overview : "Not available"}
      />

      <div className="flex items-center gap-2">
        <DetailsInfoGridRightItem
          text="Rating"
          value={vote_average ? vote_average.toFixed(1) : "Not available"}
        />
        <span>|</span>
        <DetailsInfoGridRightItem
          text="People"
          value={vote_count ? vote_count.toLocaleString() : "Not available"}
        />
      </div>

      <div className="text-sm text-gray-500 font-semibold flex items-center gap-2 flex-wrap">
        <span className="text-blue-500 font-semibold">
          Production Companies :{" "}
        </span>
        {production_companies?.length > 0
          ? production_companies?.slice(0, 5).map((company) => (
              <p
                key={company.id}
                className="text-xs text-white font-semibold bg-blue-400 px-2 py-1 rounded-md"
              >
                {company.name}
              </p>
            ))
          : "Not available"}
      </div>
    </div>
  );
};

const DetailsInfoGridRightItem = ({ text, value }) => (
  <p className="text-sm text-gray-500 font-semibold">
    <span className="text-blue-500 capitalize">{text} : </span>
    {value ? value : "Not available"}
  </p>
);
