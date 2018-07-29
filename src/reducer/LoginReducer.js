import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../actions/ActionTypes";

let dataState = {data: [], loading: false};
export  default LoginReducer= (state = dataState, action)=>{
    debugger
    alert(JSON.stringify(action))
    switch (action.type) {
        case LOGIN_SUCCESS:
            state = Object.assign({}, state, { data: action.payload, loading:false });
            return state;
        case LOGIN_FAILURE:
            state = Object.assign({}, state, { data: action.payload, loading:false });
            return state;
        default:
            return state;
    }
}

