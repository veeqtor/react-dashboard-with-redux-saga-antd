/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import dashboard from './dashboard';
import login from './login';
import { ProtectedRoute } from './privateRoutes';
import UnProtectedRoute from './publicRoutes';

export const protectedRoutes = [dashboard];
const publicRoutes = [login];

const Routes = (): React.ReactElement => {
  return (
    <Switch>
      {publicRoutes.map((elm, i) => {
        return <UnProtectedRoute key={i} {...elm} />;
      })}
      {protectedRoutes.map((elm, i) => {
        return <ProtectedRoute key={i} {...elm} />;
      })}
      <Route exact path="*" render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Routes;
