import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./List";
import { getUsers } from "../../store/actions/users";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Form from "./Form";

function Users({ getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const { path, url } = useRouteMatch();

  console.log("match", path, url);

  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <List />
        </Route>
        <Route path={path + "/:id"}>
          <Form />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getUsers,
};

export default connect(null, mapDispatchToProps)(Users);
