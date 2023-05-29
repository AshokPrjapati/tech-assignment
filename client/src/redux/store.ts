import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Reducer as AuthReducer } from "./auth/auth.reducer";
import { reducer as AddPostReducer } from "./post/addPost/addPost.reducer";
import { reducer as UpdatePostReducer } from "./post/updatePost/updatePost.reducer";
import { reducer as GetPostReducer } from "./post/getPost/getPost.reducer";
import { reducer as OEMsReducer } from "./oems/oems.reducer";
import { reducer as DeletePostReducer } from "./post/deletePost/deletePost.reducer";


declare global {
     interface Window {
          __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
     }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const RootReducers = {
     auth: AuthReducer,
     addPost:AddPostReducer,
     updatePost: UpdatePostReducer,
     getPosts:GetPostReducer,
     oem:OEMsReducer,
     deletePost:DeletePostReducer
}

export const store = legacy_createStore(combineReducers(RootReducers), composeEnhancers(applyMiddleware(thunk)));


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


type DisppatchFn = () => AppDispatch;
export const useAppDispatch: DisppatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;