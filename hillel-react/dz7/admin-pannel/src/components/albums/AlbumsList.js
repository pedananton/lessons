import React from "react";
import AlbumsListItem from "./AlbumsListItem";
import TableContainer from "@material-ui/core/TableContainer";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";

function AlbumsList({ albums }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>UserId</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AlbumsListItem />
            {albums.map((album) => (
              <AlbumsListItem album={album} key={album.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = ({ albums: { items } }) => ({
  albums: items,
});

export default connect(mapStateToProps)(AlbumsList);
