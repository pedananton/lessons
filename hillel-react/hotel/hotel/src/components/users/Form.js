import React from "react";
import { withRouter } from "react-router-dom";
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

function Form({ user }) {
    console.log('user', user)
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
          
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = (state, props) => {
  const user =
    // eslint-disable-next-line
    props.match.params.id == "new"
      ? {
          name: "",
          phone: "",
          email: "",
        }
      : // eslint-disable-next-line
        state.users.items.find((user) => user.id == props.match.params.id);
  return {
    user,
  };
};

export default withRouter(connect(mapStateToProps)(Form));
