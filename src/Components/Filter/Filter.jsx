import React from "react";

function Filter({ value, onFilterChange }) {
  return (
    <label>
      Find contacts by name :
      <input
        onChange={onFilterChange}
        value={value}
        type="text"
        name="filter"
      />
    </label>
  );
}

export default Filter;
