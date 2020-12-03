/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { UserList } from './UserList';

describe('Tests for the App component so as to load the app', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<UserList/>)
  });

  test('renders learn react link', () => {
    expect(wrapper).toHaveLength(1);
  });
})

