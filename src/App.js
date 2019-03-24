import React, { Component } from 'react';
import './App.css';

import { TodoList } from './components/TodoListApp';
import TodoListItems from './components/TodoListItems';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoList>
              <TodoListItems />
          </TodoList>
      </div>
    );
  }
}

export default App;
