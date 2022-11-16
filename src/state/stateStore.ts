import { flowers } from "./../models/flowerModel";
import { userModel } from "./../models/userModel";
import { observable, action, makeObservable, makeAutoObservable } from "mobx";
import { Console } from "console";
import { useFormControl } from "@mui/material";

const url = "https://flowrspot-api.herokuapp.com";
const baseUserURL = `${url}/api/v1/users`;
const baseFlowersURL = `${url}/api/v1/flowers`;
export interface login {
  email: string;
  password: string;
}

class StateStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable values = {
    user: <userModel>{},
    flowers: null,
    error: "",
    isRegistered: false,
    isLogged: false,
    userProfile: {},
  };

  async setAccount(formData: userModel | login, isLogin: boolean) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const dynamicURL = isLogin ? "/login" : "/register";
    const query = await fetch(`${baseUserURL}${dynamicURL}`, requestOptions);
    if (query) {
      const res = await query.json();
      if (!res.auth_token) {
        this.values.error = res.error;
      } else {
        isLogin
          ? (this.values.isLogged = true)
          : (this.values.isRegistered = true);
        sessionStorage.setItem("token", JSON.stringify(res.auth_token));
      }
    }
  }

  async getFlowerData() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const query = await fetch(`${baseFlowersURL}/random`, requestOptions);
    if (query) {
      const res = await query.json();
      this.values.flowers = res;
    }
  }

  async searchFlower(val: string) {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const query = await fetch(
      `${baseFlowersURL}/search?query=${val}`,
      requestOptions
    );
    if (query) {
      const res = await query.json();
      this.values.flowers = JSON.parse(res);
    }
  }

  async fetchProfile() {
    console.log("Fetching profile...");
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const query = await fetch(`${baseUserURL}/me`, requestOptions);
    if (query) {
      const res = await query.json();
      this.values.user = res;
    }
  }
  @action setNewAccount(item: userModel) {
    this.setAccount(item, false);
  }
  @action setLogin(item: login) {
    this.setAccount(item, true);
  }
  @action setProfile() {
    this.fetchProfile();
  }
  @action setLogOut() {
    this.values.isLogged = false;
    sessionStorage.clear();
  }
}

export default StateStore;
