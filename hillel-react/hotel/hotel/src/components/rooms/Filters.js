import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../store/actions/filters";

function Filters({ allRoomsCount, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>Все комнаты ({allRoomsCount})</button>
      <button onClick={() => setFilter("occupied")}>Заняты</button>
      <button onClick={() => setFilter("free")}>Свободны</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filter: state.filters.filter,
    allRoomsCount: state.rooms.items.length,
  };
}

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
