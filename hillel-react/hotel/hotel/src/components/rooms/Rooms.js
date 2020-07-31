import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import RoomsList from "./RoomsList";
import { getRooms } from "../../store/actions/rooms";
import {getUsers} from '../../store/actions/users'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Filters from "./Filters";

function Rooms({ getRooms, getUsers }) {
  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <Filters />
          <RoomsList />
        </Route>
        <Route path={path + "/:id"}></Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getRooms,
  getUsers,
};

export default connect(null, mapDispatchToProps)(Rooms);
