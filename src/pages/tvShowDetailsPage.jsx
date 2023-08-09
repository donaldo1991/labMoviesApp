import React from "react";
import { useParams } from "react-router-dom";
import TVShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTVShowPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVShowDetailsPage = () => {
  const { id } = useParams();

  const { data: tvshow, error, isLoading, isError } = useQuery(
    ["tvshow", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvshow ? (
        <>
          <PageTemplate tvshow={tvshow}>
            <TVShowDetails tvshow={tvshow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tvShow details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;
