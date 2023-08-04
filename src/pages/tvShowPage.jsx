import React from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { getTVShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddTVPlaylistIcon from '../components/cardIcons/addTVPlaylist'

const tvShowsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("tv shows", getTVShows);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvshows = data ? data.results : [];

  return (
    <PageTemplate
      title="TV Shows"
      tvshows={tvshows}
      action={(tvshow) => {
        return <AddTVPlaylistIcon tvshow={tvshow} />
      }}
    />
  );
};
export default tvShowsPage;
