import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ); 
  const [favourites, setFavourites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToFavourites = (tvshow) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(tvshow.id)) {
      updatedFavourites.push(tvshow.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToPlaylist = (tvshow) => {
    let updatedPlaylist = [...playlist];
    if (!playlist.includes(tvshow.id)) {
      updatedPlaylist.push(tvshow.id);
    }
    setPlaylist(updatedPlaylist);
    console.log(updatedPlaylist);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tvshow) => {
    setFavourites(favourites.filter((mId) => mId !== tvshow.id));
  };

  const addReview = (tvshow, review) => {   // NEW
    setMyReviews( {...myReviews, [tvshow.id]: review } )
  };

  return (
    <TVContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylist,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;
