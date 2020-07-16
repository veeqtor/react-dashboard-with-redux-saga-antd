/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from '../utils/auth';

export const UnProtectedRoute: React.FC<RouteProps> = (props) => {
  const { location } = props;
  const isAuthenticated = auth.isAuthenticated();

  if (isAuthenticated) {
    const renderComponent = () => <Redirect to={{ pathname: '/dashboard', state: { from: location } }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default UnProtectedRoute;
