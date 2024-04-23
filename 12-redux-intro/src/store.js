import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/Accounts/accountSlice";
import customerReducer from "./features/Customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "Buy a car",
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// ACTION CREATORS

// So basically action creators are nothing more than simply functions
// that return actions.

// So basically we create on action creator for one action