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
import ListItem from "./ListItem";
import { Link, useRouteMatch } from "react-router-dom";

function List({ users }) {
  const { path, url } = useRouteMatch();
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <ListItem user={user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to={url+'/new'} >Add New</Link>
    </>
  );
}

const mapStateToProps = ({ users: { items } }) => ({
  users: items,
});

export default connect(mapStateToProps)(List);
