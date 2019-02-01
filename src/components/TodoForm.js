import React, {Component} from 'react';
import { updateInput } from '../actions';
import {connect} from "react-redux";
import {saveTodo} from "../reducers/todoReducer";

/**
 * Oh dang! Form is not functioning as well :(
 * TODO: Figure out how to connect this component
 * to state and which fields of state we actually dependant on
 */

class TodoForm extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        //  TODO: figure out how the make this stuff work again
        if (this.props.currentTodo.length === 0) {
            alert('please enter anything to add')
        }
        else
            this.props.saveTodo(this.props.currentTodo)
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


const mapStateToProps = state =>{
        return{
            currentTodo : state.currentTodo
        }
}

export default connect(mapStateToProps,{updateInput,saveTodo})(TodoForm)
