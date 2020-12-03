/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { CreateActivityForm } from './CreateActivityForm';

describe('Tests for the App component so as to load the app', () => {
  let wrapper: ReactWrapper;
  const mockFn = jest.fn().mockReturnValue(0.0)
  beforeAll(() => {
    wrapper = mount(<CreateActivityForm onChange={mockFn} />)
  });

  test('renders learn react link', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders container component', () => {
    expect(wrapper.find(CreateActivityForm)).toHaveLength(1)
  });
})

