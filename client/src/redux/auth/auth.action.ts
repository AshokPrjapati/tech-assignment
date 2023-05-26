import axios from "axios";
import * as Types from "./auth.types";
import { UserProps } from "../../constant/constant";
import { Dispatch } from "redux";

export const login =
  (credentials: UserProps, navigate: Function, toast: any) =>
  async (dispatch: Dispatch) => {
    // email validation
    const { email, password } = credentials;
    if (!email.includes("@") || !email.includes(".com"))
      return toast.error("Invalid email");

    // check password length
    if (password.length < 6)
      return toast.error("Password length should be at least 6");

    // form submission
    dispatch({ type: Types.AUTH_LOADING });
    try {
      console.log(credentials);
      const res = await axios.post("/user/login", credentials);
      if (res.status >= 400 && res.status < 500) {
        dispatch({ type: Types.AUTH_ERROR, payload: res.data.message });
        navigate("/login");
      } else {
        dispatch({ type: Types.SIGNIN_SUCCESS, payload: res.data.credentials });
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            id: res.data.credentials._id,
            token: res.data.token,
          })
        );
        console.log(res.data.credentials);
        toast.success("SignIn successfull");
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: Types.AUTH_ERROR });
      toast.error("Something went wrong");
      throw err;
    }
};

export const signup =
  (credentials: UserProps, navigate: Function, toast: any) =>
  async (dispatch: Dispatch) => {
    // form validation
    const { email, password, name } = credentials;
    if(!name || !password || ! email) return toast.error("Please fill all fields")
    if (!email.includes("@") || !email.includes(".com"))
      return toast.error("Invalid email");
    if (password.length < 6)
      return toast.error("Password length should be at least 6");

    // form submission
    dispatch({ type: Types.AUTH_LOADING });
    try {
      console.log(credentials);
      const res = await axios.post("/user/register", credentials);
      dispatch({ type: Types.SIGNUP_SUCCESS, payload: res.data.credentials });
      sessionStorage.setItem(
        "user",
        JSON.stringify({ id: res.data.credentials._id })
      );
      toast.success("Register Successfull");
      navigate("/login");
    } catch (error) {
      dispatch({ type: Types.AUTH_ERROR });
      toast.error("Something went wrong");
    }
  };
