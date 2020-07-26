import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";

function ListItem({ user }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() {
    history.push(url + "/" + user.id);
  }

  return (
    <>
      <TableRow onClick={onRowClick}>
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="right">{user.username}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.phone}</TableCell>
        <TableCell align="right">{user.id}</TableCell>
      </TableRow>
    </>
  );
}

export default ListItem;
