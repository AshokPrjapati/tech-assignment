import { Dispatch } from "redux";
import * as Types from "./getPost.types"
import axios from "axios";


export const getPosts = () => async(dispatch:Dispatch)=>{
    dispatch({type:Types.GET_POST_LOADING});
    try {
        const res = await axios.get("/post/getall");
        dispatch({type:Types.GET_POST_SUCCESS, payload:res.data.posts});
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.GET_POST_ERROR})
    }
}