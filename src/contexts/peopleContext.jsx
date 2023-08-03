import React, { useState } from "react";

export const PeopleContext = React.createContext(null);

const PeopleContextProvider = (props) => {
  const [peopleList, setlist] = useState([]);


  const addToList = (person) => {
    let updatedList = [...peopleList];
    if (!peopleList.includes(person.id)) {
      updatedList.push(person.id);
    }
    setlist(updatedList);
    console.log(updatedList);
  };

  return (
    <PeopleContext.Provider
      value={{
        addToList
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
