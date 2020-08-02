import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

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
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;
