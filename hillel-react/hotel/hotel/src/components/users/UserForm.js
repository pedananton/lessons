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
  function validate(values) {
    const errors = {};
    console.log("validate", values);

    if (isNaN(values.phone) || " ") {
      errors.phone = "Phone must be number";
    }
    return errors;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
      <Formik initialValues={user} onSubmit={onFormSubmit} validate={validate}>
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <Field name="phone" type="phone">
            {({ field, meta }) => (
              <div>
                <input {...field} />
                {meta.error ? meta.error : null}
              </div>
            )}
          </Field>
          <button type="submit">Save</button>
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
