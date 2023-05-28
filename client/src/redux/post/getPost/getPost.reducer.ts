import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./getPost.types";

interface intialState {
    loading: false;
    allPosts: CarDetailsProps[];
}

const intialState = {
    loading:false,
    allPosts:[],
}

export const reducer = (state=intialState,{type,payload}:any) =>{
    switch(type){
        case Types.GET_POST_LOADING :return {  ...state,loading: true };
        case Types.GET_POST_SUCCESS : return {  ...state, loading: false, allPosts:payload };    
        case Types.GET_POST_ERROR : return {  ...state, loading: false };
        default:return state; 
    }
}