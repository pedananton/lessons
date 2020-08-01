import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@material-ui/core";
import RoomsListItem from "./RoomsListItem";

function RoomsList({ rooms }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rooms names</TableCell>
              <TableCell align="right">Rooms ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <RoomsListItem room={room} key={room.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function mapStateToProps(state) {
  const filter = state.filters.filter;
  return {
    rooms:
      filter === "all"
        ? state.rooms.items
        : state.rooms.items.filter((room) => {
            if (
              filter === "occupied" &&
              room.id ===
                state.users.users.filter((user) => user.roomId == room.id)
            )
              return true;
            if (
              filter === "free" &&
              room.id !== state.users.users.filter((user) => user.roomId)
            )
              return true;
            return false;
          }),
  };
}

export default connect(mapStateToProps)(RoomsList);
