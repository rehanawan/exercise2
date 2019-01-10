import React, { Component } from 'react';

const TodoItem = (props) => (
    <li>
        <input 
            checked={ props.isComplete }
            onChange={ () => props.toggleTodo(props.id) }
            type="checkbox"/> { props.name }
    </li>
);

class TodoList extends Component {

    render() {
        return (
            <div className="todo-list">
                <ul>
                    { this.props.list.map(todo => 
                        <TodoItem 
                            key={ todo.id } 
                            toggleTodo={ this.props.toggleTodo } 
                            { ...todo } /> 
                        ) 
                    }
                </ul>
            </div>
        )
    } 
}

export default TodoList;