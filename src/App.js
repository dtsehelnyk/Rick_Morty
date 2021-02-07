import React from 'react';
import './App.scss';

import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
