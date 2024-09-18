import { RootState } from "..";
import {authApi} from "../../slices/auth";
import { createSlice } from "@reduxjs/toolkit";
//import { clearLocalStorage, setLocalUser } from "../../storage";
import {AuthUser} from "../type";



  const INITIAL_STATE = {
    auth: false,
  }



const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    
    login:(state)=>{
      state.auth = true;

    },
    logout: () => {
      //clearLocalStorage();
      localStorage.removeItem("auth")
      localStorage.setItem("auth", JSON.stringify(INITIAL_STATE))
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      if (action.payload) {
        localStorage.setItem("authuser", JSON.stringify(action.payload))
        return { ...state, ...action.payload };
      } else {
        return { ...state, loginError: "login-error" };
      }
    });
  },
});

export const authstatus = (state: RootState) => state.auth;


export const { logout ,login} = authSlice.actions;

const { reducer } = authSlice;

export default reducer;
