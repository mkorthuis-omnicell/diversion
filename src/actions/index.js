import * as types from './types';

export const login = (loggedIn, message) => ({ type: types.LOGIN, payload: { loggedIn, message } });

export const showState = (state) => ({ type: types.SHOW_STATE, payload: { state } });
