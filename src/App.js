import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import About from './components/About';
import Index from './components/Index';
import Order from './components/Order';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/restaurants" exact component={Restaurants} />
            <Route path="/contact" component={Contact} />
            <Route path="/restaurants/:id" component={Order} />
        </Switch>
    </div> 
    </Router>
  );
}

export default App;
