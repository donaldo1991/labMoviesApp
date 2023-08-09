import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterTrendingPeopleCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import PeopleList from "../peopleList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function PeopleListPageTemplate({ people, title }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [knownForFilter, setKnownForFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const knownForId = Number(knownForFilter);

  let displayedPeople = people
    .filter((m) => {
      return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    });


  const handleChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else setKnownForFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <PeopleList people={displayedPeople} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          knownForFilter={knownForFilter}
        />
      </Drawer>
    </>
  );
}
export default PeopleListPageTemplate;
