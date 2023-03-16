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

// update users
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.put(`api/v1/participant`, data);
};

const deleteUser = (userId) => {
  return instance.delete("api/v1/participant", { data: { id: userId } });
};

export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser };
