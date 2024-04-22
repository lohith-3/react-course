const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// REDUCER

function accountReducer(state = initialStateAccount, action) {
  const { type, payload } = action;

  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan":
      if (state.loan > 0) return { ...state };
      //   LATER
      return {
        ...state,
        loan: payload.amount,
        loanPurpose: payload.purpose,
        balance: state.balance + payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return { ...state };
  }
}

// ACTION CREATORS

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payLoan" };
}

export { accountReducer, deposit, withdraw, requestLoan, payLoan };

// So in Redux, Middleware is basically a function that sits between
// the dispatching and the store.

// So in essence middleware is a go to cycle in order to perform
// side effects in redux
