import React, { Component } from 'react';
import Info from "./Info";

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