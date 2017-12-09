const states = {};
class State {
  state = {};
  listeners = {};
  constructor(state) {
    this.state = state;
  }

  _isEqual(key, val) {
    let oldVal = this.state[key];
    return oldVal === val;
  }

  _notifiy(key) {
    let listeners = this.listeners[key] || [];
    listeners.forEach(listener => {
      listener(this.state[key]);
    });
  }

  update(key, val) {
    if(this._isEqual(key, val)) {
      console.log('values are equal so skipping change');
      return;
    }
    this.state[key] = val;
    this._notifiy(key);
  }

  get(key) {
    return this.state[key] || this.state;
  }

  observe(key, cb) {
    let listeners = this.listeners[key] || [];
    listeners.push(cb);
    this.listeners[key] = listeners;
    console.log('Observers for ', key, listeners.length);
  }

  destroy(key, cb) {
    let listeners = this.listeners[key];
    let index = cb ? listeners.indexOf(cb) : listeners = [];
    if(index !== -1) {
      listeners.splice(index, 1);
    }
  }
}


export const StateProvider = {
  createState(name, state) {
    let newState = states[name] || new State(state);
    states[name] = newState;
    return newState;
  },
  getState(name) {
    return states[name];
  },
  destroy(name) {
    states[name] = null;
  }
};
