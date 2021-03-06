import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <label>
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          aria-label="Search Robots"
          placeholder="Search Robots"
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
