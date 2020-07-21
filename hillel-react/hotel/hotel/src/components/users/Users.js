import React from "react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import List from "./List";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function Users() {
  const { path } = useRouteMatch();
  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <List />
        </Route>
        <Route path={path + "/:id"}></Route>
      </Switch>
    </Paper>
  );
}

export default connect()(Users);
