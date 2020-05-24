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

export const fetchData=()=> dispatch=> {

    dispatch(fetchRequest)
    axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                const all=response.data
                dispatch(dataRecieved(all))
            })
            .catch(error=>{
                const err=error.message
                dispatch(errorOccured(err))
            })

}
    
export const addPost=(post)=>(dispatch)=>{

    try {
         axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(post)
          })
          .then(res=>{res.json()})
          .catch(err=>console.log(err))
        } catch (error) {   
            console.log(error)
        
    }



}