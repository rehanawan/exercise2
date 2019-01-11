import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoName: ""
        }
    }

    onFormSubmit(event) {
        debugger;
        event.preventDefault();
        this.props.onSubmitCallback(this.state.todoName);
        this.setState({todoName: ""});
    }

    onInputChange(event) {
        const value = event.target.value;
        this.setState({todoName: value});
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    type="text"
                    value={this.state.todoName}
                    onChange={this.onInputChange.bind(this)} />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

export default TodoForm;
