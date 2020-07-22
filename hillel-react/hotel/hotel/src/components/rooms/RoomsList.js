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
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
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

const mapStateToProps = ({ rooms: { items } }) => ({
  rooms: items,
});

export default connect(mapStateToProps)(RoomsList);
