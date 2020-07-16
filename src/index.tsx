import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

const mountNode = document.getElementById('root');
ReactDOM.render(React.createElement(App), mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
