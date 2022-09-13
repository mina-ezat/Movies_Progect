import axios from "axios";
import { ALLMOVIES, moviesApi } from "../types/moviesTypes";
import { useSelector, useDispatch } from "react-redux";
export const getAllMovies = () => {
    return async (dispatch) => {
        const res = await axios.get(moviesApi);

        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }

}

export const getMoviesSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1dac39336de827d7271a72ce7ca9b51f&query=${word}&language=en-US&page=1&include_adult=false`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }

}
export const getPages = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1dac39336de827d7271a72ce7ca9b51f&language=en-US&page=${word}`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }
}

export const DetailesMovie = (word) => {
    return async (dispatch) => {
        const res = await axios.get(` https://api.themoviedb.org/3/movie/${word}?api_key=1dac39336de827d7271a72ce7ca9b51f&language=en-US`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }
}
