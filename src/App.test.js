import React from 'react';
import ReactDOM from 'react-dom';
import TodoListYooo from './TodoListYooo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoListYooo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
