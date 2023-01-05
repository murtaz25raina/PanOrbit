const INITAL_STATE = {
  loginstatus: false,
  userId : null
};

const loginReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginstatus: true, userId:action.payload };
    case "LOGOUT":
      return INITAL_STATE;
    default:
      return state;
  }
};

export default loginReducer;