import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from 'client/components/TodoListItem';

describe('<TodoListItem />', () => {
  test('renders', () => {
    const item = {
      title: 'Alpha',
    };
    const div = document.createElement('div');
    ReactDOM.render(<TodoListItem item={item} />, div);
  });
});

