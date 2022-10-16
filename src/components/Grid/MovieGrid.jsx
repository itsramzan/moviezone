import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetGenreQuery,
  useGetMoviesQuery,
} from "../../features/movies/moviesApi";
import Slider from "./Slider";
import HeadingWithCount from "../Shared/HeadingWithCount";
import MovieGridItem from "./MovieGridItem";
import Pagination from "../Shared/Pagination";
import scrollTop from "../../utils/scrollTop";

const MovieGrid = () => {
  const [page, setPage] = useState(1);

  const { type, search, genre } = useParams();

  const { data: genres } = useGetGenreQuery();

  useEffect(() => {
    return () => setPage(1);
  }, [type, search, genre]);

  // Generate title and makeType
  let title = null;
  let makeType = null;

  if (!type && !search && !genre) {
    title = "Now playing";
    makeType = "now_playing";
  }
  if (type) {
    title = type.split("_").join(" ");
    makeType = type;
  }
  if (search) title = `Search by "${search}"`;
  if (genre) {
    title = `Genre by "${
      genres?.genres?.find((item) => item.id === parseInt(genre)).name
    }"`;
  }

  const { isFetching, data, isError, error } = useGetMoviesQuery({
    type: makeType,
    search,
    genre,
    page,
  });

  const handlePaginate = (current) => {
    setPage(current);
    scrollTop();
  };

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

  if (!isFetching && !isError && data?.results?.length === 0)
    content = <p>No movies found</p>;

  if (!isFetching && !isError && data?.results?.length > 0)
    content = (
      <>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {data.results.map((item) => (
            <MovieGridItem key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          page={data.page}
          totalResults={data.total_results}
          pageSize={20}
          handlePaginate={handlePaginate}
        />
      </>
    );

  return (
    <>
      {makeType === "now_playing" && <Slider />}
      <HeadingWithCount title={title} total={data?.total_results || 0} />
      {content}
    </>
  );
};

export default MovieGrid;
