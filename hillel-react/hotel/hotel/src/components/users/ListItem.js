import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

function ListItem({user}) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.username}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">{user.id}</TableCell>
    </TableRow>
  );
}

export default ListItem;
