import apiManager from "./apiManager";
// import moment from "moment";

// ? logs in the user
// param queryObj { phoneNumber, password }
const login = async (queryObj) => {
  const message = await apiManager.axios
    .post(`/login`, queryObj)
    .then((response) => {
      localStorage.setItem("Authentication", response.data.access_token);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("role", response.data.user.roles.name);
      localStorage.setItem("setupTime", new Date().getTime());
      return response;
    })
    .catch((e) => {
      return {
        status: e.status,
        message: e.response,
      };
    });
  return message;
};

export default {
  login,
};
