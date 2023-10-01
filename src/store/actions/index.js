import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTypes';

export const addPersonToFavorite = person => {
    console.log(person);
    return {
        type: ADD_PERSON_TO_FAVORITE,
        payload: person
    }
}

export const removePersonFromFavorite = personId => {
    return {
        type: REMOVE_PERSON_FROM_FAVORITE,
        payload: personId
    }
}