import actionType from "../actions/type";

const inititialState={
    heThongRap:[],
};

const reducer=(state=inititialState,action)=>{
    switch (action.type) {
        case actionType.GET_LAYDANHSACH_CUMRAP:
            state.heThongRap=action.payload;
            return {...state}
        default:
            return state;
    }
};

export default reducer;