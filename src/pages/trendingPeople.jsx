import React, { useContext } from "react";
import PeopleListPageTemplate from "../components/templatePeopleListPage";
import { getTrendingPeople } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const TrendingPeople = (props) => {
  const { data, error, isLoading, isError } = useQuery("Trending people", getTrendingPeople);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];

  return (
    <PeopleListPageTemplate
      title="Trending People"
      people={people}
      //action={(person) => {
      //  return <AddPlaylistIcon person={person} />
      //}}
    />
  );
};

export default TrendingPeople;
