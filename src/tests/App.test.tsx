import { render, screen } from '@testing-library/react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Signup from '../components/authenticationComponents/Signup'
import ISignupProps from '../components/authenticationComponents/Signup';
import HomeScreen from '../components/HomeScreen';
import StateStore from '../state/stateStore';
import { log } from 'console'

describe("<App />", () => {
  test("Should contain a logo with  name logo.svg", async () => {
    render(<BrowserRouter >
      <App /></BrowserRouter>)
        const data = screen.getByTestId('logo-id');
        expect(data.getAttribute('src')).toEqual('logo.svg');

  });
});
