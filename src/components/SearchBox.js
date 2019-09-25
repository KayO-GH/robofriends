import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange} //onchange, call the searchChange fxn, which was passed in as a prop
      />
    </div>
  );
};

export default SearchBox;
