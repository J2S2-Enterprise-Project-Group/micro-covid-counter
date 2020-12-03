/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { CreateGroupForm } from './CreateGroupForm';

describe('Tests for the App component so as to load the app', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<CreateGroupForm />)
  });

  test('renders learn react link', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders container component', () => {
    expect(wrapper.find(CreateGroupForm)).toHaveLength(1)
  });
})

