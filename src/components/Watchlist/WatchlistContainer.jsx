import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeadingWithCount from "../Shared/HeadingWithCount";
import WatchlistItem from "./WatchlistItem";
import Pagination from "../Shared/Pagination";
import scrollTop from "../../utils/scrollTop";

const WatchlistContainer = () => {
  const [page, setPage] = useState(1);
  const size = 5;
  const { watchlist } = useSelector((state) => state.watchlist);

  const handlePaginate = (current) => {
    setPage(current);
    scrollTop();
  };

  // Decide what to render
  let content = null;

  if (watchlist?.length === 0) content = <p>No watchlist available</p>;

  if (watchlist?.length > 0)
    content = (
      <>
        <div className="flex flex-col gap-4">
          {watchlist?.slice(size * page - size, size * page).map((item) => (
            <WatchlistItem key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          page={page}
          totalResults={watchlist?.length || 0}
          pageSize={size}
          handlePaginate={handlePaginate}
        />
      </>
    );

  return (
    <>
      <HeadingWithCount title="Watchlist" total={watchlist?.length} />
      {content}
    </>
  );
};

export default WatchlistContainer;
