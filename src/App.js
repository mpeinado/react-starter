import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import Navbar from './components/Navbar';
import TodosPage from './components/todo/TodosPage';
import Todo from './components/todo/Todo';
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
            <Route path="/:post_id" component={Todo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
