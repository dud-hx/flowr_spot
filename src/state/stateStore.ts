import { user } from "./../models/userModel";
import { observable, action, makeObservable, makeAutoObservable } from "mobx";
import { Console } from "console";

const url = "https://flowrspot-api.herokuapp.com";
const baseURL = `${url}/api/v1/users`;
export interface login {
  email: string;
  password: string;
}

class StateStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable values = {
    user: {},
    error: "",
    isRegistered: false,
    isLogged: false,
  };
  async setAccount(formData: user | login, isLogin: boolean) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const dynamicURL = isLogin ? "/login" : "/register";
    const query = await fetch(`${baseURL}${dynamicURL}`, requestOptions);
    if (query) {
      const res = await query.json();
      if (!res.auth_token) {
        this.values.error = res.error;
      } else {
        isLogin
          ? (this.values.isLogged = true)
          : (this.values.isRegistered = true);
      }
    }
  }

  async login(formData: login) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
  }
  @action setNewAccount(item: user) {
    this.setAccount(item, false);
  }
  @action setLogin(item: login) {
    this.setAccount(item, true);
  }
}

export default StateStore;
