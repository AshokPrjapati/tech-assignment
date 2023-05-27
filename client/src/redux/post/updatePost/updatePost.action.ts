import { Dispatch } from "redux";
import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./updatePost.types"
import axios from "axios";


export const CreatePost = (id:string,carDetails:CarDetailsProps,onClose:()=>void, toast:any) => async(dispatch:Dispatch)=>{
    dispatch({type:Types.UPDATE_POST_LOADING});
    try {
        const res = await axios.patch(`/post/update/${id}`,carDetails);
        const data = await res.data;

        dispatch({type:Types.UPDATE_POST_SUCCESS, payload:data.post});
        toast.success(data.message ||  "Car details updated successfully");
        onClose();

    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.UPDATE_POST_ERROR});
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}