import { observable, action, makeObservable } from 'mobx';

 export default class AuthStore {

    constructor() {
        makeObservable(this);
      } 
      
  @observable errors = undefined;

  @observable values = {
    email: '',
    password: '',
  };


  @action setEmail(email:string) {
    this.values.email = email;
  }

  @action setPassword(password:string) {
    this.values.password = password;
  }

  @action reset() {
    this.values.email = '';
    this.values.password = '';
  }

}