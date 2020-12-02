/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import { Container } from '@material-ui/core';

describe('Tests for the App component so as to load the app', () => {
  let wrapper: ReactWrapper;
  beforeAll(() => {
    wrapper = mount(<App />)
  })
  test('renders learn react link', () => {
    expect(wrapper).toHaveLength(1);
  });
  test('renders browser router', () => {
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  })
  test('renders navbar component', () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  })
  test('renders container component', () => {
    expect(wrapper.find(Container)).toHaveLength(1)
  })
})

