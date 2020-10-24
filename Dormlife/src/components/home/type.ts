export interface propsSuggestItem  {
    src : string,
    link : string
}
export interface propsSearch {
    dormName? : string,
    price? : number,
    distance? : number,
    maxperson? : number,
    rating? : number,
    roomSize? : number,
    roomType? : string,
    gender? : string,
    convenienceStore? : boolean,
    kitchen? : boolean,
    laundry? : boolean,
    parking? : boolean,
    pet? : boolean,
    internet? : boolean,
    smoking? : boolean,
    fitness? : boolean,
    pool? : boolean,
    cooking? : boolean,
    restRoom? : boolean,
    show : boolean,
    handleClose : () => void
    sendBack : (data : string) => void
}
export interface propsDorm {
    src : string,
    id : string
}
export interface propsCarousel {
    dorms : propsDorm[]
}