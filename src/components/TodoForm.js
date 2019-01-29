import React, {Component} from 'react';
import { updateInput } from '../actions';

/**
 * Oh dang! Form is not functioning as well :(
 * TODO: Figure out how to connect this component
 * to state and which fields of state we actually dependant on
 */

class TodoForm extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        //  TODO: figure out how the make this stuff work again
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


export default TodoForm;