import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import Navbar from './components/Navbar';
import TodosPage from './components/todo/TodosPage';
import AboutPage from './components/AboutPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={TodosPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
