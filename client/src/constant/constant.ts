export interface UserProps{
    name?:string;
    email:string;
    password?:string
}


export interface AuthInitialStateProps{
    loading: boolean
    error: string
    authenticated: boolean
    userCredential: UserProps
}

export interface CarDetailsProps{
    _id?:string;
    modelImage:string;
    modelName:string; 
    modelYear:string; 
    modelPrice:number; 
    modelColor:string; 
    modelMileage:number; 
    odometerKM:number; 
    majorScratch:string; 
    accidents:number; 
    buyers:number; 
    registerPlace:string;
    email?:string
}