import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return <App />;
};

export default hot(AppProviders);
