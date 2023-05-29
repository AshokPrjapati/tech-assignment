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
export interface OEMsSpecProps{
    _id?:string;
    brand:  string ;
    model:  string ;
    year:  number ;
    listPrice:  number ;
    colors:  string[] ;
    mileage:  number ;
    power:  number ;
    maxSpeed:  number ;
}

type dealer = { _id : string, name:string}
export interface CarDetailsProps{
    _id?: string;
    dealer?: dealer;
    oemSpec?: string | OEMsSpecProps;
    carImage: string ;
    odometer: number;
    majorScratches: string;
    originalPaint: boolean;
    noOfAccidents: number;
    noOfPreviousBuyers: number;
    registrationPlace: string;
}

