import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ErrorBoundary from './modules/components/ErrorBoundary';
import Views from './modules/views';
import store, { history } from './store';

function App(): React.ReactElement {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Views location={{}} />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
