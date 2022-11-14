import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./assets/style/index.scss";
import Login from "./components/authenticationComponents/Login";
import Signup from "./components/authenticationComponents/Signup";
import FavoriteFlowers from "./components/flowerComponents/FavoriteFlowers";
import FlowerList from "./components/flowerComponents/FlowerList";
import HomeScreen from "./components/HomeScreen";
import Navigation from "./components/navigation/Navigation";
import SightingList from "./components/sightingsComponents/SightingList";
import { Provider } from 'mobx-react';
import StateStore from "./state/stateStore";

interface IAppProps {

}

interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
  private store: StateStore

  constructor(props: IAppProps, state: IAppState) {
    super(props)
    this.store = new StateStore()
  }
  render() {
    return (
      <div className="app">
        <Provider StateStore={this.store}>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="favorites" element={<FavoriteFlowers />} />
            <Route path="flowers" element={<FlowerList />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="sighting" element={<SightingList />} />
          </Routes>
        </Provider>
      </div>
    );
  }
};

export default App;
