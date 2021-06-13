import React from 'react';
import { Router } from 'react-router-dom';
// import { Router } from 'react-router';
import {history} from './helpers/history';
import Routes from "./Routes";

function App() {

  return (
    <Router history={history}>
    <Routes />
    </Router>
  );
}

export default App;
