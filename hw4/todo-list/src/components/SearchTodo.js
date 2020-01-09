import React from "react";

const SearchTodo = props => {
  return (
    <h2>
      Search
      <input
        name="searchtext"
        onChange={e => props.setSearching(e)}
        placeholder="Search Todo"
      />
    </h2>
  );
};
export default SearchTodo;
