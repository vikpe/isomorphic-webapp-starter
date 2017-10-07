import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.PureComponent {
  render() {
    const {
            title,
          } = this.props.item;

    return (
        <div className="app-todo-list-item">
          {title}
        </div>
    );
  }
}

TodoListItem.propTypes = {
  item: PropTypes.object,
};

export default TodoListItem;
