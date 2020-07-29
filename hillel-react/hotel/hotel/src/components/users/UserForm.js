import React from "react";
import { withRouter, useHistory } from "react-router-dom";
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
import { saveFormUser, deleteFormUser } from "../../store/actions/users";

function UserForm({ user, onSave, onUserDelete, rooms }) {
  const history = useHistory();

  function onFormSubmit(data) {
    onSave(data);
  }

  function validate(values) {
    const errors = {};

    if (isNaN(values.phone)) {
      errors.phone = "Phone must be number";
    }
    return errors;
  }

  function onDeleteClick() {
    history.push("/");
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
          <Field name="name" type="text" placeholder="name" />
          <Field name="email" type="email" placeholder="email" />
          <Field name="phone" type="phone">
            {({ field, meta }) => (
              <div>
                <input {...field} placeholder="+38" />
                {meta.error ? meta.error : null}
              </div>
            )}
          </Field>
          <Field name="roomId" as="select" placeholder="Room number">
            {rooms.map((room) => (
              <option value={room.id} key={room.id}>
                {room.Color}
              </option>
            ))}
          </Field>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => onUserDelete(user.id, onDeleteClick())}
          >
            Delete
          </button>
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
          email: "",
          phone: "",
          roomId: "",
        }
      : // eslint-disable-next-line
        state.users.users.find((user) => user.id == props.match.params.id);
  return {
    user,
    rooms: state.rooms.items,
  };
};

const mapDispatchToProps = {
  onSave: saveFormUser,
  onUserDelete: deleteFormUser,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserForm)
);
