import React from 'react';
import './App.css';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import Nav from './components/layout/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDetail from './components/pages/UserDetail';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
