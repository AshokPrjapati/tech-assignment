import { Dispatch } from "redux";
import * as Types from "./oems.types"
import {axiosInstance as axios} from "../../provider/AxiosInstance";

export const getAllOEMs = () => async(dispatch:Dispatch) =>{
    dispatch({type:Types.OEMS_LOADING});
    try {
        const res = await axios.get("/oem/getall");
        const data = await res.data;
        dispatch({type:Types.OEMS_SUCCESS, payload:data.OEMs});
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.OEMS_ERROR})
    }
}

export const setSelectedOem = (payload:string) => ({
    type: Types.SELECTED_OEMs,
    payload
});
