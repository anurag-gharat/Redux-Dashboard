export const fetchRequest=()=>{
    return {
        type:"FETCH_REQUEST"
    }
}

export const dataRecieved=(data)=>{
    return {
        type:"FETCH_REQUEST_SUCCESS",
        payload:data
    }
}

export const errorOccured=(error)=>{
    return {
        type:"FETCH_REQUEST_FAIL",
        payload:error
    }
}