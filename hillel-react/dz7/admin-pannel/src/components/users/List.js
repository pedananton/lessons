import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Button,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import { useHistory, useRouteMatch } from "react-router-dom";

function List({ users }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  function onAddButtonClick() {
    history.push(url + "new");
  }
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
      <Button onClick={onAddButtonClick}>Add</Button>
    </>
  );
}

const mapStateToProps = ({ users: { items } }) => ({
  users: items,
});

export default connect(mapStateToProps)(List);
