import { LOG_IN_USER } from "../action/userAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    img: "",
    role: "",
  },
  isAuthenticated: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        account: {
          access_token: action.payload?.DT?.access_token,
          refresh_token: action.payload?.DT?.refresh_token,
          username: action.payload?.DT?.username,
          img: action.payload?.DT?.img,
          role: action.payload?.DT?.role,
        },
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
