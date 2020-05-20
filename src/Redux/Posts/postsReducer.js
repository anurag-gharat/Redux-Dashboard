const initialState={
    isOnline:true,
    newMessages:10,
    newNotifications:50
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'STATUS':
            return{
                ...state,
                isOnline:!state.isOnline
            }
        case 'READ_MESSSAGE':
            return {
                ...state,
                newMessages:state.newMessages-1
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                newMessages:state.newMessages+1
            }
        case 'CLEAR_NOTIFICATIONS':
            return {
                ...state,
                newNotifications:0
            }
        default :
            return state
        }

}

export default userReducer