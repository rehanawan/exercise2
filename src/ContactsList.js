import React from 'react';
import Contacts from './components/Contacts';
import './ContactsList.css';

class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayContact: null,
      contacts: []
    }
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    fetch('http://localhost:8686/contacts')
        .then(resp => resp.json())
        .then(results => this.setState({contacts: results}));
  };

  render() {
    return (
        <div>
          <div className="contacts-app">
            <h1>{ this.props.headerText }</h1>
            { this.state.displayContact 
              ? <div />
              : <Contacts contacts={this.state.contacts} />
            }
          </div>
        </div>
    );
  }
}

export default ContactsList;
