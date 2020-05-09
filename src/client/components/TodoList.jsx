import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from 'client/components/TodoListItem';

class TodoList extends React.PureComponent {
  render() {
    const { onDeleteClick } = this.props;

    return (
      <div className="app-todo-list">
        {this.props.items.map((item) => (
          <TodoListItem
            key={item._id}
            onDeleteClick={onDeleteClick}
            item={item}
          />
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  onDeleteClick: PropTypes.func,
  items: PropTypes.array,
};

TodoList.defaultProps = {
  items: [],
};

export default TodoList;
