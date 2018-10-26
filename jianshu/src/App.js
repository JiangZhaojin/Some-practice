import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={ Home } />
          <Route path="/detail/:id" exact component={ Detail } />
          <Route path="/login" exact component={ Login } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
