import { Dispatch } from "redux";
import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./addPost.types"
import {axiosInstance as axios} from "../../../provider/AxiosInstance";

export const CreatePost = (carDetails:CarDetailsProps,onClose:() => void, toast:any) => async(dispatch:Dispatch)=>{
    dispatch({type:Types.ADD_POST_LOADING});
    try {
        const res = await axios.post("/post/add",carDetails);
        const data = await res.data;

        dispatch({type:Types.ADD_POST_SUCCESS, payload:data.post});
        toast.success(data.message ||  "Car details added successfully");
        onClose();

    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.ADD_POST_ERROR})
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}