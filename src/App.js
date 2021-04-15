import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import Dashboard from './components/dashboard.js'

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
