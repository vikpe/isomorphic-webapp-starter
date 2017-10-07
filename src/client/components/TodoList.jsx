import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

class TodoList extends React.PureComponent {
  render() {
    return (
        <div className="app-todo-list">
          {
            this.props.items.map(item => <TodoListItem item={item}/>)
          }
        </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
};

TodoList.defaultProps = {
  items: [],
};

export default TodoList;
