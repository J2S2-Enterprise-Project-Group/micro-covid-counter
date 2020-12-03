/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Landing } from './Landing';

describe('Tests for the App component so as to load the app', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<Landing isLoggedIn={false} />)
  });

  test('renders learn react link', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders container component', () => {
    expect(wrapper.find(Landing)).toHaveLength(1)
  });
})

