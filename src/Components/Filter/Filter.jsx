import React from "react";

function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input onChange={onChange} value={value} type="text" name="filter" />
    </label>
  );
}

export default Filter;
