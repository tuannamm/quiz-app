const LOG_IN_USER = "LOG_IN_USER";

const loginUser = (data) => {
  return {
    type: LOG_IN_USER,
    payload: data,
  };
};

export { loginUser, LOG_IN_USER };
