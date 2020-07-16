import withSuspense, { IWithSuspenseProps } from '../modules/containers/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Authentication/ForgotPassword',
  data: {
    title: 'Password Reset',
  },
};
export default {
  path: '/forgot-password',
  component: withSuspense(data),
  exact: true,
};
