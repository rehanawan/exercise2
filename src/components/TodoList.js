import React, { Component } from 'react';
import { fetchTodos, toggleTodo } from '../reducers/todoReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const TodoItem = (props) => (
    <li onClick={() => props.toggleTodo(props.id)} >
        <input 
            checked={ props.isComplete }
            type="checkbox"/> { props.name }
    </li>
);

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="todo-list">
                <ul>
                    { this.props.todos.map(todo => 
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

//  prop types
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { fetchTodos, toggleTodo }
)(TodoList)