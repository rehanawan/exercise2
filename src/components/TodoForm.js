import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../actions';
import { saveTodo } from '../reducers/todoReducer';

class TodoForm extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        this.props.saveTodo(this.props.currentTodo);
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    value={this.props.currentTodo} 
                    onChange={ (event) => { this.props.updateInput(event.target.value) } } />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentTodo: state.currentTodo
    }
}

export default connect(
    mapStateToProps,
    { 
        updateInput,
        saveTodo
    }
)(TodoForm)