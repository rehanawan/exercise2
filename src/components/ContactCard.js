import React from 'react';

class ContactCard extends React.Component {

    render() {
        return(
            <div className="contact-card">
                <img className="avatar" src={this.props.details.avatar} alt="Profile"/>
                <span className="content">
                    <label>Name: </label><div>{this.props.details.name}</div>
                    <label>Phone: </label><div>{this.props.details.phoneNumber}</div>
                    <label>Address: </label><div>{this.props.details.address}</div>
                    <label>City: </label><div>{this.props.details.city}</div>
                    <label>Description: </label> <div>{this.props.details.description}</div>
                </span>
                <a href="/">Back</a>
            </div>
        )
    }
}

export default ContactCard;
