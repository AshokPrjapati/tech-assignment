import { AuthInitialStateProps} from '../../constant/constant';
import * as Types from './auth.types';

const initialUserCredState = {
     name: "",
     email: "",
     password: "",
}

const initialState: AuthInitialStateProps = {
     loading: false,
     error: '',
     authenticated: false,
     userCredential: initialUserCredState
}

export const Reducer = (state = initialState, { type, payload }: any) => {
     switch (type) {
          case Types.AUTH_LOADING:
               return ({ ...state, loading: true });
          case Types.AUTH_ERROR:
               return ({ ...state, loading: false, error: payload });
          case Types.SIGNIN_SUCCESS:
               return ({ ...state, loading: false, error: '', userCredential: payload, authenticated: true })
          case Types.SIGNUP_SUCCESS:
               return ({ ...state, loading: false, error: '' });
          case Types.AUTH_OPERATION_SUCCESS:
               return ({ ...state, loading: false, error: '', });
          case Types.SIGNOUT_SUCCESS:
               return initialState;
          default:
               return state;
     }
}