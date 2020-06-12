import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchFieldAction = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
});

export const fetchRobotsAction = () => (dispatch) => {//things like this are why we'll stick to the context API... LOL
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    //do asynchronous call 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({ 
            type: REQUEST_ROBOTS_SUCCESS,
            payload: users
        }))
        .catch(error => dispatch({
            type: REQUEST_ROBOTS_FAILED,
            payload: error
        }));
};