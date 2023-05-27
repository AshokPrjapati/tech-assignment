import { CarDetailsProps } from "../../../constant/constant";
import * as Types from "./updatePost.types";

interface intialState {
    loading: false;
    allPosts: CarDetailsProps[];
    updatedPost: CarDetailsProps
}

const intialState = {
    loading:false,
    addedPost: null,
    allPosts:[],
}

export const reducer = (state=intialState,{type,paylaod}:any) =>{
    switch(type){
        case Types.UPDATE_POST_LOADING :return {  ...state,loading: true };
        case Types.UPDATE_POST_SUCCESS : return {  ...state, loading: false };    
        case Types.UPDATE_POST_ERROR : return {  ...state, loading: false } ;
        default:return state; 

    }
}