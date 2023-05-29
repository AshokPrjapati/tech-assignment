import { Dispatch } from "redux";
import * as Types from "./deletePost.types"
import axios from "axios";
import { getPosts } from "../getPost/getPost.action";


export const deletePost = (id:string,toast:any) => async(dispatch:Dispatch<any>)=>{
    dispatch({type:Types.DELETE_POST_LOADING});
    try {
        const res = await axios.patch(`/post/delete/${id}`);
        const data = await res.data;

        dispatch({type:Types.DELETE_POST_SUCCESS});
        toast.success(data.message ||  "Car details deleted successfully");
        dispatch(getPosts())
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.DELETE_POST_ERROR});
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}