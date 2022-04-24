import React, { useState } from 'react';

const SearchContext = React.createContext({
  searchedFood: '',
  onSubmitHandler: () => {},
  setSearchedFood: () => {}
});

export const SearchContextProvider = (props) => {
  const [searchedFood, setSearchedFood] = useState('');

  const searchSubmitHandler = (searchedFood) => {
    setSearchedFood(searchedFood);
  };
  console.log(searchedFood);
  return (
    <SearchContext.Provider
      value={{
        searchedFood: searchedFood,
        onSubmitHandler: searchSubmitHandler,
        setSearchedFood: setSearchedFood
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
