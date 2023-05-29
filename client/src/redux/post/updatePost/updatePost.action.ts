import { AnyAction, Dispatch } from "redux";
import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./updatePost.types"
import axios from "axios";
import { getPosts } from "../getPost/getPost.action";


export const updatePost = (id:string,formData:CarDetailsProps,onClose:()=>void, toast:any) => async(dispatch:Dispatch<any>)=>{
    dispatch({type:Types.UPDATE_POST_LOADING});
    try {
        const res = await axios.patch(`/post/update/${id}`,formData);
        const data = await res.data;

        dispatch({type:Types.UPDATE_POST_SUCCESS});
        toast.success(data.message ||  "Car details updated successfully");
        dispatch(getPosts())
        onClose();

    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.UPDATE_POST_ERROR});
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}