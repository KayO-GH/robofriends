import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

//Set up initial state for search
const initialStateSearch = {
    searchField: ''
};

export const searchRobotsReducer = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            // merge passed in state and passed in payload and return
            return Object.assign({}, state, { searchField: action.payload });
        //we can also destructure using spread operator and return this:
        //return {...state, searchField: action.payload};
        default:
            return state;
    }
};


//set up initial state for robots
const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
}; 

export const fetchRobotsReducer = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false };
        default:
            return state;
    }
};