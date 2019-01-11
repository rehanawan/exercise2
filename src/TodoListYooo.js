import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class TodoListYooo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.createTodo = this.createTodo.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    fetch('http://localhost:8686/todos')
        .then(resp => resp.json())
        .then(results => this.setState({todos: results}));
  };

  saveTodo(newTodo) {
    fetch('http://localhost:8686/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
        .then(resp => resp.json())
        .then(result => {
          const newTodos = [...this.state.todos]
          newTodos.push(result);
          this.setState({todos: newTodos});
        });
  };

  updateTodo(todo) {
    fetch(`http://localhost:8686/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(resp => resp.json())
        .then(result => {
          const updatedList = this.state.todos.map(todo => {
            if (todo.id === result.id)
              return result;
            else
              return todo;
          });
          this.setState({todos: updatedList})
        });
  };

  createTodo(todoName) {
      debugger;
    const newTodo = {name: todoName, isComplete: false};
    this.saveTodo(newTodo);
  }

  toggleTodo = (todoId) => {
    const todo = this.state.todos.find((t) => {
      return t.id === todoId;
    });
    const toggledTodo = { ...todo, isComplete: !todo.isComplete }
    this.updateTodo(toggledTodo);
  }

  render() {
    return (
        <div>
          <div>Hello</div>
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
