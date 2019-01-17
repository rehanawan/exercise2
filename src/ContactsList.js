import React from 'react';
import Contacts from './components/Contacts';
import ContactCard from './components/ContactCard';
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
    fetch('http://localhost:8686/people')
        .then(resp => resp.json())
        .then(results => this.setState({contacts: results}));
  };

  onContactClickHandler = (clickedId) => {
    const contactClicked = this.state.contacts.find(contact => {
      return contact.id === clickedId
    });
    this.setState({displayContact: contactClicked});
  }

  render() {
    return (
        <div className="contacts-app">
          <div className="title">{ this.props.headerText }</div>
          { this.state.displayContact 
            ? <ContactCard details={this.state.displayContact} />
            : <Contacts 
                contacts={this.state.contacts} 
                onContactClick={this.onContactClickHandler}
                />
          }
        </div>
    );
  }
}

export default ContactsList;
