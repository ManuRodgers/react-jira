import './App.css';

import { Login } from 'pages';
import React from 'react';

export const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};
