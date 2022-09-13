import { ALLMOVIES } from "../types/moviesTypes"

const initalValue = { movies: [], pageCount: 1 }
export const moviesReducer = (state = initalValue, action) => {
    switch (action.type) {
        case ALLMOVIES:
            return { movies: action.data, pageCount: action.pages };
        default:
            return state
    }
}