/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ActivityLogger from './ActivityLogger';
import { CreateActivityForm } from '../CreateActivityForm/CreateActivityForm';
import RiskRating from '../RiskRating/RiskRating';

describe('Tests for the App component so as to load the app', () => {
  let wrapper: ReactWrapper;
  beforeAll(() => {
    wrapper = mount(<ActivityLogger />)
  });

  test('renders learn react link', () => {
    expect(wrapper).toHaveLength(1);
  });
  
  test('renders container component', () => {
    expect(wrapper.find(CreateActivityForm)).toHaveLength(1)
  });

  test('renders container component', () => {
    expect(wrapper.find(RiskRating)).toHaveLength(1)
  });
})

