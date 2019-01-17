import React from 'react';
import Contacts from './components/Contacts';
import ContactCard from './components/ContactCard';
import './ContactsList.css';

class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      displayContact: null
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

  onBackClick = () => {
    this.setState({displayContact: null});
  }

  render() {
    return (
        <div className="contacts-app">
          <div className="title">{ this.state.displayContact 
              ? this.state.displayContact.name
              : this.props.headerText
            }
          </div>
          { this.state.displayContact 
            ? <ContactCard 
                details={this.state.displayContact} 
                onBackClick={this.onBackClick}
              />
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
