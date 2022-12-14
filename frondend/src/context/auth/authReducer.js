//@ts-nocheck
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from "../types";

export default function authReducer(state, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        isAdmin: action.payload.isAdmin,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.user.email);
      localStorage.setItem("name", action.payload.user.name);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        isAdmin: action.payload.user.isAdmin,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
        isAdmin: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
