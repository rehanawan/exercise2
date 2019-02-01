import React, { Component } from 'react';
import { fetchTodos, toggleTodo, deleteTodos } from '../reducers/todoReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { VISIBILITY_FILTERS } from '../actions';

const TodoItem = (props) => (
    <li>
        <p onClick={() => props.toggleTodo(props.id)}
            className={props.isComplete ? "task completed" : "task"}>{props.name}</p>
        <button onClick = { (e) => {
                e.preventDefault();
                props.deleteTodos(props.id)}
        }
            className='button1'>Delete</button>
    </li>
);

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    filterTasks = (tasks, filterOption) => {
        const filtered = this.props.todos.filter(task => {
            if (filterOption === VISIBILITY_FILTERS.SHOW_ALL) {
                return task;
            }
            if (filterOption === VISIBILITY_FILTERS.SHOW_ACTIVE 
                && task.isComplete === false) {
                return task;
            }
            if (filterOption === VISIBILITY_FILTERS.SHOW_COMPLETED 
                && task.isComplete === true) {
                return task;
            }
            return null;
        });
            
        return filtered;
    }

    listTasks = (filteredTodos) => {
        const taskList = filteredTodos.map(todo => 
            <TodoItem
                key={ todo.id }
                deleteTodos = { this.props.deleteTodos }
                toggleTodo = { this.props.toggleTodo }
                { ...todo } /> 
        );
        return taskList;
    }

    render() {
        const { todos, visibilityFilter } = this.props;
        const filteredTodos = this.filterTasks(todos, visibilityFilter);
        return (
            <div className="todo-list">
                <ul>
                    { this.listTasks(filteredTodos) }
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
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(
    mapStateToProps,
    { fetchTodos, toggleTodo, deleteTodos }
)(TodoList)