import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
import { getAlbums } from "../../store/actions/albums";

function Albums({ getAlbums }) {
  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <AlbumsList />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getAlbums,
};

export default connect(null, mapDispatchToProps)(Albums);
