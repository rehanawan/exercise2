import React, { Component } from 'react';

const Info = (props) => {
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

class Contacts extends Component {

    render() {
        return (
            <div className="contacts">
                { this.props.contacts.map((contact, index) => (
                    <Info 
                        key={ index } 
                        { ...contact } /> 
                    )) 
                }
            </div>
        )
    } 
}

export default Contacts;