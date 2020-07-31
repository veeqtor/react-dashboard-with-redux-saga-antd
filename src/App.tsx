import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ErrorBoundary from './modules/components/ErrorBoundary';
import store, { history } from './store';
import Routes from './routes';

function App(): React.ReactElement {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
