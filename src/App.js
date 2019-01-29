import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Controls from './components/Controls';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="todo-app">
        <h1>TODO LIST:</h1>
        <Message />
        <TodoForm />
        <Controls />
        <TodoList />
      </div>
    );
  }
}

export default App;
