import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./addPost.types";

interface intialState {
    loading: false;
    allPosts: CarDetailsProps[];
    addedPost: CarDetailsProps
}

const intialState = {
    loading:false,
    addedPost: null,
    allPosts:[],
}

export const reducer = (state=intialState,{type,paylaod}:any) =>{
    switch(type){
        case Types.ADD_POST_LOADING :return {  ...state,loading: true };
        case Types.ADD_POST_SUCCESS : return {  ...state, loading: false, addedPost:paylaod };    
        case Types.ADD_POST_ERROR : return {  ...state, loading: false };
        default:return state; 
    }
}