import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from '../../../src/client/components/TodoListItem';

it('renders without crashing', () => {
  const item = {
    title: 'hehe',
  };
  const div = document.createElement('div');
  ReactDOM.render(<TodoListItem item={item} />, div);
});
