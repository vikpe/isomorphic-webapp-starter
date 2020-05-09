import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoList from 'client/components/TodoList';

import { createItem, getItems, deleteItem } from 'client/actions/itemActions';

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getItems());
  }

  render() {
    const { dispatch, items } = this.props;

    const onDeleteClick = (id) => dispatch(deleteItem(id));
    const onCreateClick = () =>
      dispatch(createItem({ title: `Item ${1 + items.length}` }));

    return (
      <div>
        <TodoList items={items} onDeleteClick={onDeleteClick} />
        <hr />
        <a href="#" onClick={onCreateClick}>
          Add item
        </a>
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(TodoListContainer);
