import axios from "axios";
export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    const result = await axios.post(
      process.env.REACT_APP_API_BACKEND + "users/login" ,
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
