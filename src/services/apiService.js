import instance from "../utils/axiosCustomize";

// post users
const postCreateNewUser = (email, password, username, role, image) => {
  // submit data to database
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.post(`api/v1/participant`, data);
};

// get all users
const getAllUsers = () => {
  return instance.get("api/v1/participant/all");
};

// get user paginate
const getListUserPaginate = (page, limit) => {
  return instance.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

// update users
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.put(`api/v1/participant`, data);
};

// delete user
const deleteUser = (userId) => {
  return instance.delete("api/v1/participant", { data: { id: userId } });
};

// login user
const postUser = (email, password) => {
  return instance.post("api/v1/login", { email, password });
};

// signup user
const postNewUser = (email, password, username) => {
  return instance.post("api/v1/register", { email, password, username });
};

// get quiz list of user
const getQuizListUser = () => {
  return instance.get("api/v1/quiz-by-participant");
};

export {
  postCreateNewUser,
  getAllUsers,
  getListUserPaginate,
  putUpdateUser,
  deleteUser,
  postUser,
  postNewUser,
  getQuizListUser,
};
