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

function List({ users, roomId, startDate }) {
  const { url } = useRouteMatch();
  return (
    <>
      <button type="submit">
        <Link to={url + "/new"}>Add New</Link>
      </button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right' >Phone</TableCell>
              <TableCell align='right' >ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <ListItem
                user={user}
                key={user.id}
                roomId={roomId}
                //startDate={startDate}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = ({ rooms: { items }, users: { users } }) => ({
  users,
  roomId: items.id,
  //startDate: users.startDate,
});

export default connect(mapStateToProps)(List);
