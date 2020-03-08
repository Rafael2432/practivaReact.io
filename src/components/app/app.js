import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PgUserList from "../pages/pgUserList";
import PgCreateUser from "../pages/pgCreateUser";
import PgLayout from "../pages/pgLayout";
import PgError404 from "../pages/pgError404";

function app() {
  return (
    <BrowserRouter>
      <PgLayout>
        <Switch>
          <Route exact path="/users" component={PgUserList} />
          <Route exact path="/users/new" component={PgCreateUser} />
          <Route component={PgError404} />
        </Switch>
      </PgLayout>
    </BrowserRouter>
  );
}
export default app;
