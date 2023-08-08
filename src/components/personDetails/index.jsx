import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import Reviews from '../movieReviews'

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const PersonDetails = ( {person}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography:
      </Typography>
      <Typography variant="h6" component="p">
        {person.biography}
      </Typography><br></br>
        
      <Typography variant="h5" component="h3">
        Date of Birth:
      </Typography>
      <Typography variant="h6" component="p">
        {person.birthday}
      </Typography><br></br>

      <Typography variant="h5" component="h3">
        Place of Birth:
      </Typography>
      <Typography variant="h6" component="p">
        {person.place_of_birth}
      </Typography>
      
    </>
  );
};
export default  PersonDetails;
