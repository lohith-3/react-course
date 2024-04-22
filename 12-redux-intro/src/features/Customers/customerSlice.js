const initialStateCustomer = {
  fullName: "John",
  nationalID: "651542048849",
  createdAt: "",
};

function customerReducer(state = initialStateCustomer, action) {
  const { type, payload } = action;

  switch (type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: payload.fullName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: payload };
    default:
      return { ...state };
  }
}

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

export { customerReducer, createCustomer, updateName };
