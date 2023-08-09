import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    }
  },
};

const TVShowHeader = (props) => {
  const tvshow = props.tvshow;
  //const tvshows = JSON.parse(localStorage.getItem("favourites"));
  
  //for (var i = 0; i <= movies.length - 1; i++) {
  //    if (movie.id == movies[i].id){
  //      var flag = true;    
  //    }
  //}
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {tvshow.title}{"   "}
        <a href={tvshow.media_type}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${tvshow.name}`} </span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVShowHeader;
