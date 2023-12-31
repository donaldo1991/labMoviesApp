import React  from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { getTrendingPeople } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterPeopleCard(props) {
  const { data, error, isLoading, isError } = useQuery("starredMovies", getTrendingPeople);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const people = data.results;
//  if (people[0].name !== "All") {
//    people.unshift({ id: "0", name: "All" });
//  }

  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    console.log(e.target.value)
    handleUserImput(e, "title", e.target.value);
  };

  const handleKnownForChange = (e) => {
    console.log(e.target.value)
    handleUserImput(e, "knownFor", e.target.value);
  };

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter People
        </Typography>
        <TextField
        sx={styles.formControl}
        id="filled-search"
        label="Search field"
        type="search"
        value={props.titleFilter}
        variant="filled"
        onChange={handleTextChange}
        />
        <FormControl sx={styles.formControl}>
          <InputLabel id="knownFor-label">Popularity</InputLabel>
          <Select
            labelId="knownFor-label"
            id="knownFor-select"
            value={props.knownForFilter}
            onChange={handleKnownForChange}
          >
            {people.map((person) => {
              //console.log(person)
              return (
                <MenuItem key={person.id} value={person.id}>
                  {person.popularity}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort People
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}
