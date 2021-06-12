import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
