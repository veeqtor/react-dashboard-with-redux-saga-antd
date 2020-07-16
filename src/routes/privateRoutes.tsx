/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from '../utils/auth';

export interface IProtectedRouteProps extends RouteProps {
  isAllowed?: boolean;
  restrictedPath?: string;
  authenticationPath: string;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const { authenticationPath, restrictedPath, isAllowed = true } = props;
  let redirectPath: string | undefined;
  const isAuthenticated = auth.isAuthenticated();
  if (!isAuthenticated) {
    redirectPath = authenticationPath;
  }
  if (isAuthenticated && !isAllowed) {
    redirectPath = restrictedPath;
  }

  if (isAuthenticated) {
    return (
      <Route
        {...props}
        render={(props) => <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />}
      />
    );
  }
  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute;
