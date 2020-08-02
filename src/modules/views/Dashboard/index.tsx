/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, match } from 'react-router-dom';

import ProtectedRoute from '../../../routes/privateRoutes';
import DashboardLayout from '../../Layouts/DashboardLayout';
import { getDashBoardRoutes } from '../../../routes/dashboard';
import { selectNavigationState } from '../../../store/reducers/navigation';
import { goToNextPage } from '../../../store/actions/navigation';
import { IApplicationRootState } from '../../../types';

export interface IDashboardProps {
  title: string;
  match: match<{}>;
  location: Location;
  changePage: (pathname: string) => void;
}

const Dashboard = (props: IDashboardProps): React.ReactElement => {
  const {
    match: { path },
    changePage,
  } = props;

  const changePagehandler = (pagePath: string): void => {
    changePage(pagePath);
  };
  return (
    <DashboardLayout title={props.title} changePageHandler={changePagehandler}>
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
