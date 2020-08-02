import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from '../utils/auth';

export interface IProtectedRouteProps extends RouteProps {
  isAllowed?: boolean;
  restrictedPath?: string;
  authenticationPath: string;
}

export const ProtectedRoute: React.SFC<IProtectedRouteProps> = ({
  authenticationPath,
  restrictedPath,
  isAllowed = true,
  component: Component,
  ...rest
}: IProtectedRouteProps) => {
  if (!Component) return null;

  let redirectPath: string | undefined;
  const isAuthenticated = auth.isAuthenticated();
  if (!isAuthenticated) {
    redirectPath = authenticationPath;
  }
  if (isAuthenticated && !isAllowed) {
    redirectPath = restrictedPath;
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

export default ProtectedRoute;
