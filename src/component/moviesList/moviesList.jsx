import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cardmovies from "../cardmovies/cardmovies";
import PaginatedMovies from "../paginateMovies/PaginateMovies";
import { getAllMovies } from "../redux/action/moviesAction";
const MoviesList = () => {
    const dispach = useDispatch()

    const [movies, setMovies] = useState([])

    useEffect(() => {
        dispach(getAllMovies())
    }, [])
    const AllMovies = useSelector((state) => state.movies)
    useEffect(() => {
        setMovies(AllMovies)
    }, [AllMovies])
    return (<>
        <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
            {
                movies.map((item) => {

                    return <div key={item.id}> <Cardmovies data={item} /></div>
                })
            }
        </div>
        <div className="container mx-auto">
            < PaginatedMovies itemsPerPage={4} />

        </div>

    </>)

}
export default MoviesList;