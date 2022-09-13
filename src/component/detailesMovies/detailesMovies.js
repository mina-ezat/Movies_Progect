import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
const DetailesMovies = () => {
    const [movie, setMovie] = useState([])
    const param = useParams();
    const getCards = async () => {
        const cardApi = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1dac39336de827d7271a72ce7ca9b51f&language=en-US`)
        setMovie(cardApi.data)
    }
    useEffect(() => {
        getCards();
    }, [])
    const watch = () => {
        if (movie.homepage) {
            return <a target="_blank" href={movie.homepage} >
                <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"> watch</button>
            </a>
        } else {
            return <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"> watch</button>
        }
    }


    return (
        <>
            <div className="  flex flex-wrap flex--movie">
                <div className="m-auto w-full md:w-full  max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between md:flex-row flex-col">
                    <div className="md:flex-shrink-0">
                        <img className="md:w-56 m-auto"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt="A Quiet Place movie poster" />
                    </div>
                    <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
                        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-800 ">{movie.title}</h3>
                        <span className="movie--year text-xl lg:text-sm lg:mb-4">{movie.release_date}</span>
                        <div className="flex-grow">
                            <p className="text-xl md:text-base lg:text-base text-gray-700 leading-snug truncate-overflow">{movie.overview}</p>
                        </div>

                        <div className="button-container flex justify-between mb-2">
                            <button className="text-lg mr-4 lg:text-sm text-gray-700">rating: {movie.vote_average}</button>
                            {watch()}
                        </div>
                    </div>

                </div>
            </div>
            <div className="m-2">
                <Link to="/" className=" no-underline   mt-5 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded">Back</Link>
            </div>

        </>
    )
}

export default DetailesMovies;
