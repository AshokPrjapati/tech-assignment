export interface UserProps{
    name?:string;
    email:string;
    password:string
}


export interface AuthInitialStateProps{
    loading: boolean
    error: string
    authenticated: boolean
    userCredential: UserProps
}