import React from 'react';
import TodoList from '../components/TodoList';

class TodoListContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    const items = [
      {title: 'alpha'},
      {title: 'beta'},
      {title: 'gamma'},
    ];

    return (
        <TodoList items={items}/>
    );
  }
}

export default TodoListContainer;
