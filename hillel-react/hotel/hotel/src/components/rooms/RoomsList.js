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

// const mapStateToProps = ({ rooms: { items } }) => ({
//   rooms: items,
// });

const mapStateToProps = ({users: {users}, filter: { filter }, rooms: { items } }) => ({
  filter: filter,
  users: users,
  rooms:
    filter === "all"
      ? items
      : items.filter((item) => {
          if (filter === "occupied" && users.roomId) return true;
          if (filter === "free" && !users.roomId) return true;
          return false;
        }),
});

export default connect(mapStateToProps)(RoomsList);
