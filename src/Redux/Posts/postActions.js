import axios from 'axios'


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

export const fetchData=()=>{
    return dispatch=> {
        dispatch(fetchRequest)
        axios.get("https://jsonplaceholder.typicode.com/photos")
                .then(response=>{
                    console.log(response)
                    dataRecieved(response.data)
                })
                .catch(error=>{
                    console.log(error)
                    errorOccured(error.message)
                })
    }
}