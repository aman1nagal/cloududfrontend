  import {configureStore} from "@reduxjs/toolkit"

  import { isRejectedWithValue } from '@reduxjs/toolkit'
  import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
  import  authReducer from "./auth";
  // import {authApi} from "../slices/auth"

  import { apiSlice } from '../slices/apiSlice';




  export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action:any) => {
      if (isRejectedWithValue(action)) {
        console.warn(`We got a rejected action! ${action.error.message}`)

        if(action.payload.status == 401){
          window.location.replace("http://localhost:3000/login")
        }
      }
      return next(action)
  }

  export const store = configureStore({
      reducer: {
          [apiSlice.reducerPath]: apiSlice.reducer,
          auth: authReducer,
  
      },
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware,rtkQueryErrorLogger),
      devTools: true
  })

  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>;

