import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

function RoomsListItem({room}) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {room.Color}
      </TableCell>
      <TableCell align="right">{room.id}</TableCell>
    </TableRow>
  );
}

export default RoomsListItem;
