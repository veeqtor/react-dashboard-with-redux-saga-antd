import withSuspense, { IWithSuspenseProps } from '../modules/containers/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Authentication/Login',
  data: {
    title: 'Login',
  },
};
export default {
  path: '/login',
  component: withSuspense(data),
  exact: true,
};
