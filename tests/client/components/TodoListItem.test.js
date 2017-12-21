import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import TodoListItem from 'client/components/TodoListItem';

describe('<TodoListItem />', () => {
  test('renders', () => {
    const props = {
      item: { title: 'Alpha' },
      onDeleteClick: sinon.spy(),
    };
    const wrapper = shallow(<TodoListItem {...props} />);

    expect(wrapper.find('div.app-todo-list-item').length).toEqual(1);
    expect(wrapper.find('a').length).toEqual(1);
    expect(
      wrapper
        .find('div')
        .first()
        .text(),
    ).toContain('Alpha');
  });

  test('triggers onDeleteClick', () => {
    const props = {
      item: { title: 'Alpha' },
      onDeleteClick: sinon.spy(),
    };
    const wrapper = shallow(<TodoListItem {...props} />);
    wrapper
      .find('a')
      .first()
      .simulate('click');
    sinon.assert.calledOnce(props.onDeleteClick);
  });
});
