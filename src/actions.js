import { CHANGE_SEARCHFIELD } from './constants';

export const setSearchFieldAction = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
});