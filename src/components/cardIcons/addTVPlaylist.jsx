import React, { useContext } from "react";
import { TVContext } from "../../contexts/tvContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddTVPlaylistIcon = ({ tvshow }) => {
  const context = useContext(TVContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToPlaylist(tvshow);
  };

  return (
    <IconButton aria-label="add to playlist" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddTVPlaylistIcon;