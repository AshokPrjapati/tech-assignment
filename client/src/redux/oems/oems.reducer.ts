import {  OEMsSpecProps } from '../../constant/constant';
import * as Types from './oems.types';


interface intialStateProps{
    loading:boolean;
    data:OEMsSpecProps[];
    selectedOem:string
}

const initialState:intialStateProps = {
    loading: false,
    data: [],
    selectedOem:""
}

export const reducer = (state = initialState, { type, payload }:any) => {
     switch (type) {
          case Types.OEMS_LOADING: return { ...state, loading: true  };
          case Types.OEMS_ERROR:  return { ...state, loading: false };
          case Types.OEMS_SUCCESS: return { ...state, data: payload, loading: false};
          case Types.SELECTED_OEMs: return { ...state, selectedOem:payload}
          default: return state
     }
}