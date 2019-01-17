import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
