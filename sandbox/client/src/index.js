import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/components/App';

// root application configuration
//              plug       socket
//           root component      where we are placing that root component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
