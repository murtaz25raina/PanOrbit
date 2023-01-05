import axios from "axios";
const baseURL = "https://panorbit.in/api/users.json";

export const getUsers = () => {
  return async (dispatch, getState) => {
    axios.get(baseURL).then((response) => {
      const fetchedUsers = response.data.users;
      dispatch({
        type: "GET_USERS",
        payload: fetchedUsers,
      });
    });
  };
};
