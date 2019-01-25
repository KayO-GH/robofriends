import { CHANGE_SEARCHFIELD } from './constants';

//Set up initial state
const initialState = {
    searchField: ''
};

export const searchRobotsReducer = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            // merge passed in state and passed in payload and return
            return Object.assign({},state, {searchField: action.payload});
            //we can also destructure using spread operator and return this:
            //return {...state, searchField: action.payload};
        default:
            return state;
    }
};