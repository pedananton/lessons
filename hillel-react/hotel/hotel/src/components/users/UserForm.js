import React, { useEffect } from "react";
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
import { Formik, Form, Field } from "formik";

function UserForm({ user }) {
  function onFormSubmit(data) {
    console.log("data", data);
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          {/* {user ? (
                <>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.phone}</TableCell>
                </>
              ) : (
                <TableCell>Loading</TableCell>
              )} */}
        </Table>
      </TableContainer>
      <Formik initialValues={user} onSubmit={onFormSubmit}>
        <Form>
          <Field name="name" type="text" />
        </Form>
      </Formik>
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

export default withRouter(connect(mapStateToProps)(UserForm));
