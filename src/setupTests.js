import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Avoids errors with local storage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Avoids issues with network failure during fetch

global.fetch = require('jest-fetch-mock');

// Enzyme
configure({ adapter: new Adapter() });