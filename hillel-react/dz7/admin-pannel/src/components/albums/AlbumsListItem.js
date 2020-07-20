import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export default function AlbumsListItem({ album }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {album.userId}
      </TableCell>
      <TableCell align="right">{album.id}</TableCell>
      <TableCell align="right">{album.title}</TableCell>
    </TableRow>
  );
}

/**
 *
 * не могу получить album
 * выдает ошибку TypeError: Cannot read property 'userId' of undefined
 */
