import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.PureComponent {
  render() {
    const { item, onDeleteClick } = this.props;

    return (
      <div className="app-todo-list-item">
        {item.title} -{' '}
        <a href="#" onClick={() => onDeleteClick(item._id)}>
          delete
        </a>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
};

export default TodoListItem;
