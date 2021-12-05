const initialState = {
    totalemployee:[],
    loader:false,
}


const dashboardReducer =(state=initialState,action)=>{
    switch(action.type){
        case "GET_EMPLOYEE_DATA":
            return {
                ...state,
                totalemployee:action.payload,
                loader:false
            }
        default:
            return state;
    }

}


export default dashboardReducer;
