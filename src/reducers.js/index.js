import {ADD_MOVIES} from '../actions.js';

export default function movies (state=[] , action){
    if(action.type === ADD_MOVIES) {
     return action.movies;
    }
    return state;
}



