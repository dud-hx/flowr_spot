import { flowers } from './../models/flowerModel';
import { user } from "./../models/userModel";
import { observable, action, makeObservable, makeAutoObservable } from "mobx";
import { Console } from "console";

const url = "https://flowrspot-api.herokuapp.com";
const baseUserURL = `${url}/api/v1/users`;
const baseFlowersURL =`${url}/api/v1/flowers`;
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
    flowers:{},
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
    const query = await fetch(`${baseUserURL}${dynamicURL}`, requestOptions);
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

 async getFlowerData(){
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
    };
   const query = await fetch(`${baseFlowersURL}/random`, requestOptions);
  if (query) {
    const res = await query.json();
    this.values.flowers = res
  }
 
 }
  @action setNewAccount(item: user) {
    this.setAccount(item, false);
  }
  @action setLogin(item: login) {
    this.setAccount(item, true);
  }
}

export default StateStore;
