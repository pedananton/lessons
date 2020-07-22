import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import RoomsList from "./RoomsList";
import { getRooms } from "../../store/actions/rooms";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function Rooms({ getRooms }) {
  useEffect(() => {
    getRooms();
  }, [getRooms]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <RoomsList />
          Rooms
        </Route>
        <Route path={path + "/:id"}></Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getRooms,
};

export default connect(null, mapDispatchToProps)(Rooms);
