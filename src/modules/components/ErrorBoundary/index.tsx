/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as Sentry from '@sentry/browser';

interface IErrorBoundaryState {
  hasError: boolean;
  eventId: string;
}
const { REACT_APP_SENTRY_DSN } = process.env;
Sentry.init({ dsn: REACT_APP_SENTRY_DSN });

export default class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  state = { hasError: false, eventId: '' };

  static getDerivedStateFromError(): Pick<IErrorBoundaryState, 'hasError'> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) return children;
    return (
      <div>
        <h2>Something went wrong.</h2>
        <button onClick={(): void => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>
      </div>
    );
  }
}
