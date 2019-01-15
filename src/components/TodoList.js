import React, { Component } from 'react';
import Tools from './Tools';

const TodoItem = (props) => {
    const onClickHandler = (event) => {
        event.preventDefault();
        props.toggleTodo(props.id);
    }

    return (
        <li onClick={ onClickHandler }>
            <input 
                checked={ props.isComplete }
                onChange={() => {}}
                type="checkbox"/> { props.name }
            <Tools />
        </li>
    )
}

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