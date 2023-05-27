import axios from "axios";
import * as Types from "./auth.types";
import { UserProps } from "../../constant/constant";
import { Dispatch } from "redux";

export const login =
  (credentials: UserProps, navigate: any, toast: any) =>
  async (dispatch: Dispatch) => {
    // email validation
    const { email, password } = credentials;
    if (!email.includes("@") || !email.includes(".com"))
      return toast.error("Invalid email");

    // check password length
    if(password){
       if (password.length < 6)
      return toast.error("Password length should be at least 6");
    }else return toast.error("Please enter password");
   
    // form submission
    dispatch({ type: Types.AUTH_LOADING });
    try {
      const res = await axios.post("/user/login", credentials);
      const token = res.data.token;
      console.log(res.data)

      const payload = {...res.data.credentials, token}
  
        dispatch({ type: Types.SIGNIN_SUCCESS, payload });
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            user: res.data.credentials,
            token: res.data.token,
          })
        );
        toast.success(res.data.message);
        navigate("/");
    } catch (err:any) {
      dispatch({ type: Types.AUTH_ERROR });
      console.log(err)
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
};

export const signup =
  (credentials: UserProps, navigate: any, toast: any, setSignIn:any) =>
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
      const res = await axios.post("/user/register", credentials);
      console.log(res)
      dispatch({ type: Types.SIGNUP_SUCCESS });
      toast.success(res.data.message);
      setSignIn(true);
      navigate("/auth");
    } catch (error:any) {
      dispatch({ type: Types.AUTH_ERROR });
      toast.error(error?.response?.data?.message || "something went wrong");
    }
  };
