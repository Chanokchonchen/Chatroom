export interface propsNormalForm {
    name? : string,
    lastName? : string,
    phone? : string,
    password? : string,
    confirmPassword? : string,
    gender? : string,
    acceptTerm? : boolean,
    email? : string
}
export interface propsDormForm {
    name : string,
    lastName : string,
    phone : string,
    password : string,
    confirmPassword : string,
    gender : string,
    acceptTerm : boolean,
    email : string,
    natID : string
}
export interface termService {
    show : boolean, 
    handleClose : ()=>void
}