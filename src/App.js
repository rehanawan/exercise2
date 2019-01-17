import React from 'react';
import TodoForm from './components/TodoForm';
import Contacts from './components/Contacts';
import './App.css';

class TodoListYooo extends React.Component {

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
              ? <ContactDetails contact={} />
              : <Contacts contacts={contacts} />
            }
          </div>
        </div>
    );
  }
}

export default TodoListYooo;
