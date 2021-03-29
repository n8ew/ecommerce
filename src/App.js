import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from './components/pages/About'
import ShopPage from './components/pages/Shop'
import Cart from './components/pages/Cart'
import ItemPage from './components/pages/ItemPage'

import Navbar from './components/ui/Navbar'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/:item_id" component={ItemPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
