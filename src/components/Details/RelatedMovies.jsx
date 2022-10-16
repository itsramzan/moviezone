import React from "react";
import Heading from "../Shared/Heading";
import { useParams } from "react-router-dom";
import { useGetRelatedMoviesQuery } from "../../features/movies/moviesApi";
import MovieGridItem from "../Grid/MovieGridItem";

const RelatedMovies = () => {
  const { id } = useParams();
  const { isFetching, data, isError, error } = useGetRelatedMoviesQuery({ id });

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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {data.results.slice(0, 8).map((item) => (
          <MovieGridItem key={item.id} item={item} />
        ))}
      </div>
    );

  return (
    <div className="space-y-4">
      <Heading title="Related Movies" />
      {content}
    </div>
  );
};

export default RelatedMovies;
