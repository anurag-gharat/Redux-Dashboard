const initialState={
    loading:false,
    posts:[],
    error:''
}
const postsReducer=(state=initialState,action)=>{

    switch(action.type){
        case "FETCH_REQUEST":
            return {
                loading:true,
                ...state
            }
        case "FETCH_REQUEST_SUCCESS":
            return {
                loading:false,
                posts:action.payload,
                error:"",
            }
        case "FETCH_REQUEST_FAIL":
            return {
                loading:false,
                users:[],
                error:action.payload
            }
        default :
        return state
    }

}
export default postsReducer