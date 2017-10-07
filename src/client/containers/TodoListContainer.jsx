import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

class TodoListContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
        <TodoList items={this.props.items}/>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(TodoListContainer);
