import {INCREMENT, DECREAMENT} from "../constants";

const initState = {
    counter: 0,
}


const counterReducer  =  ( state = initState ,action) => {
    if(action.type === INCREMENT){
        return {...state,counter:state.counter+1}
    }
    if(action.type === DECREAMENT){
        return {...state,counter:state.counter-1}
    }
    return state;
}


export default counterReducer;