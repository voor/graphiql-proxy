it('renders without crashing', () => {
  jest.mock('react-dom', () => ({
    render: jest.fn(),
  }));

  require('./index');

  expect(require('react-dom').render).toHaveBeenCalled();
});
