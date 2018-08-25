import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import 'jest-enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
});