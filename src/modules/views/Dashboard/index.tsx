/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { Switch, match } from 'react-router-dom';
import ProtectedRoute from '../../../routes/privateRoutes';
import DashboardLayout from '../../Layouts/DashboardLayout';
import { getDashBoardRoutes } from '../../../routes/dashboard';
import { selectNavigationState } from '../../../store/reducers/navigation';
import { connect } from 'react-redux';
import { goToNextPage } from '../../../store/actions/navigation';
import { IApplicationRootState } from '../../../types';
import { getCurrentRoute } from '../../../utils';

export interface IDashboardProps {
  title: string;
  match: match<{}>;
  location: Location;
  changePage: (pathname: string) => void;
}

const Dashboard = (props: IDashboardProps): React.ReactElement => {
  const {
    match: { path },
    location: { pathname },
    changePage,
  } = props;

  const changePagehandler = (pagePath: string): void => {
    if (getCurrentRoute(pathname, 'overview') === pagePath) return;
    changePage(pagePath);
  };
  return (
    <DashboardLayout
      title={props.title}
      changePageHandler={changePagehandler}
      currentRoute={getCurrentRoute(pathname, 'overview')}
    >
      <Switch>
        {getDashBoardRoutes(path).map((elm, i) => {
          return <ProtectedRoute key={i} {...elm} />;
        })}
      </Switch>
    </DashboardLayout>
  );
};

const mapStateToProps = (state: IApplicationRootState): any => ({
  navigation: selectNavigationState(state),
});

const mapDispatchToProps = (dispatch: Function): Pick<IDashboardProps, 'changePage'> => ({
  changePage: (pathname: string): void => dispatch(goToNextPage({ nextPageRoute: `/dashboard/${pathname}` })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);