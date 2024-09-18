
import { RootState } from "@/stores";
import { createSlice } from "@reduxjs/toolkit";

export interface Auth  {
  loginState:String;
}

const initialState:Auth = {
    loginState:"login",
};

export const loginStateSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
        state.loginState = action.payload
    },

  },
});

export const { setLoginState } = loginStateSlice.actions

export const authLoginState = (state: RootState) => state.loginState.loginState;

export default loginStateSlice.reducer;