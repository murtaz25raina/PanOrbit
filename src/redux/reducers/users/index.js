const INITAL_STATE = {
  users: [],
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
