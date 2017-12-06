import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from './routes.jsx';
import { store } from './store/configureStore';

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
