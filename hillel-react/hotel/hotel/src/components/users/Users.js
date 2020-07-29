import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import List from "./List";
import { getUsers } from "../../store/actions/users";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UserForm from "./UserForm";
import { getRooms } from "../../store/actions/rooms";

function Users({ getUsers, getRooms }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <List />
        </Route>
        <Route path={path + "/:id"}>
          <UserForm />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getUsers,
  getRooms,
};

export default connect(null, mapDispatchToProps)(Users);
