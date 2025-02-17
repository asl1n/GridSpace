import apiManager from "./apiManager";

const register = async (queryObj) => {
  try {
    // Make the POST request using FormData
    const response = await apiManager.axios
      .post(`/register`, queryObj)
      .then((response) => {
        localStorage.setItem("Authentication", response.data.access_token);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("setupTime", new Date().getTime());
        return response;
      })
      .catch((e) => {
        return {
          status: e.response.status,
          message: e.response.message || "The email or password does not match",
        };
      });

    return { status: 200, data: response.data };
  } catch (err) {
    return {
      status: err.response.status,
    };
  }
};

export default {
  register,
};
