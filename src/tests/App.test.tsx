import { render, screen } from '@testing-library/react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Link } from 'react-router-dom';
import App from '../App';
import HomeScreen from '../components/HomeScreen';
import StateStore from '../state/stateStore';

 describe("<App />", () => {
  test("Should contain a logo with  name logo.svg", async () => {
    render(<BrowserRouter >
      <App /></BrowserRouter>)
        const data = screen.getByTestId('logo-id');
        expect(data.getAttribute('src')).toEqual('logo.svg');

  });
});

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<Provider StateStore={StateStore}><HomeScreen /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
