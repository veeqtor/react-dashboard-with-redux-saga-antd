import withSuspense, { IWithSuspenseProps } from '../modules/containers/withSuspense';
import { IProtectedRouteProps } from './privateRoutes';

const data: IWithSuspenseProps = {
  page: 'Dashboard',
  data: {
    title: 'Dashboard',
  },
};

export default {
  path: '/dashboard',
  component: withSuspense(data),
  exact: false,
  authenticationPath: '/login',
  restrictedPath: '/dashboards',
  isAllowed: true,
};

const getDashBoardRoutes = (path: string): IProtectedRouteProps[] => {
  return [
    {
      path: `${path}/overview`,
      component: withSuspense({
        page: 'Overview',
        data: {
          title: 'Dashboard - Overview',
        },
      }),
      exact: true,
      authenticationPath: '/login',
    },
    {
      path: `${path}/profile`,
      component: withSuspense({
        page: 'Dashboard/Profile',
        data: {
          title: 'Dashboard - Profile',
        },
      }),
      exact: true,
      authenticationPath: '/login',
    },
  ];
};

export { getDashBoardRoutes };
