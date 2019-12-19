import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import './css/index.css';

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.getElementById('root'));
