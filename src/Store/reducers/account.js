import actionType from "../actions/type";

const initialState={
    account:null,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.SET_ME:
            state.account=action.payload;
            return {...state};
        default:
            return state;
    }
}
export default reducer;