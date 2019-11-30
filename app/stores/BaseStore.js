import alt from "../assets/AltInstance";
class BaseStore {
  static createStore() {
    return alt.createStore(this, this.name);
  }

}

export default BaseStore;