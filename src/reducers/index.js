import * as types from '../actions/types';
import * as login from './login';

const createReducer = (handlers) => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default createReducer({
  [types.LOGIN]: login.login,
  [types.SHOW_STATE]: login.showState,
});
