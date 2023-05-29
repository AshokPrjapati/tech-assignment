import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./deletePost.types";

interface intialState {
    loading: false;
    allPosts: CarDetailsProps[];
}

const intialState = {
    loading:false,
    allPosts:[],
}

export const reducer = (state=intialState,{type}:any) =>{
    switch(type){
        case Types.DELETE_POST_LOADING :return {  ...state,loading: true };
        case Types.DELETE_POST_SUCCESS : return {  ...state, loading: false };    
        case Types.DELETE_POST_ERROR : return {  ...state, loading: false } ;
        default:return state; 
    }
}