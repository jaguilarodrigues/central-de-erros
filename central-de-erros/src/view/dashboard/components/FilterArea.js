import React from "react";
import Search from "./Search";
import Options from "./Options";

function FilterArea({ onChangeLink, onChangeOrder, onchangeBuscar }) {
  return (
    <div className="filters">
      <Options
        onChangeLink={onChangeLink}
        onChangeOrder={onChangeOrder}
        onchangeBuscar={onchangeBuscar}
      />
      <Search />
    </div>
  );
}

export default FilterArea;
