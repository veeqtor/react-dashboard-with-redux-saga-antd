import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from '../utils/auth';

export const UnProtectedRoute: React.FC<RouteProps> = ({ component: Component, ...rest }: RouteProps) => {
  const isAuthenticated = auth.isAuthenticated();
  if (!Component) return null;
  let redirectPath: string | undefined;
  if (isAuthenticated) {
    redirectPath = '/dashboard/overview';
  }
  return (
    <Route
      {...rest}
      render={(renderProps): React.ReactNode => {
        if (redirectPath) {
          return <Redirect to={{ pathname: redirectPath, state: { from: renderProps.location } }} />;
        }
        return <Component {...renderProps} />;
      }}
    />
  );
};

export default UnProtectedRoute;
