import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Cardmovies(data) {
    return (
        <>
            <Link className="no-underline" to={`/movie/${data.data.id}`}>
                <div key={data.data.id} className="py-4">
                    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.data.poster_path} )` }} className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-start    items-center  mx-auto content-div" >
                        <div>
                            <div className="w-full image-cover rounded-t-md" >
                                <div className="p-2  w-16 h-16 text-center bg-green-700 rounded-full text-white float-right fd-cl   group-hover:bg-green-0">

                                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> {data.data.vote_average}</span>
                                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">rating</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <h4 className=" text-center text-blue-700 text-opacity-100">{data.data.title}</h4>



            </Link>
        </>
    )
}
export default Cardmovies;