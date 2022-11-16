import { IUser } from "../../interfaces";

const { makeAutoObservable } = require("mobx");

export default class UserStore {
  private _user: IUser;
  private _price: {};

  constructor() {
    this._user = {
      name: "test TS",
      randomNumber: 1234,
      bool: true
    };
    this._price = {
      vinyl: 1000
    };
    makeAutoObservable(this);
  }

  get user() {
    return this._user;
  }

  setUser(user) {
    this._user = user;
  }
  get price() {
    return this._price;
  }

  setPrice(price) {
    this._price = price;
  }
}
