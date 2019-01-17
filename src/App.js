import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class TodoListYooo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayContact: null,
      contacts: []
    }
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    fetch('http://localhost:8686/contacts')
        .then(resp => resp.json())
        .then(results => this.setState({contacts: results}));
  };

  render() {
    return (
        <div>
          <div className="todo-app">
            <h1>{ this.props.headerText }</h1>
            <div className="status"></div>
            <TodoForm onSubmitCallback={this.createTodo}/>
            <TodoList
              list={this.state.todos}
              toggleTodo={this.toggleTodo}
            />
          </div>
        </div>
    );
  }
}

export default TodoListYooo;
