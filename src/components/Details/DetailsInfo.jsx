import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../features/movies/moviesApi";
import Heading from "../Shared/Heading";
import DetailsInfoGrid from "./DetailsInfoGrid";

const DetailsInfo = () => {
  const { id } = useParams();
  const { isFetching, data, isError, error } = useGetMovieQuery({ id });

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

  if (!isFetching && !isError && !data) content = <p>No movie found</p>;

  if (!isFetching && !isError && data)
    content = <DetailsInfoGrid data={data} />;

  return (
    <div className="space-y-4 relative">
      <Heading title="Movie Details" />
      {content}
    </div>
  );
};

export default DetailsInfo;
