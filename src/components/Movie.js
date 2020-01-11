import React from 'react';
import { Link } from 'react-router-dom';
import Protypes from 'prop-types';
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
               
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <Link to={{
                        pathname: `/movie/${id}`,
                        state: {
                            year, title, summary, poster, genres
                        }
                    }} className="Link"> 
                    <h3 className="movie__title">{title}</h3>
                    </Link>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">{genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
       
    );
}

Movie.prototype = {
    id: Protypes.number.isRequired,
    year: Protypes.number.isRequired,
    title: Protypes.string.isRequired,
    summary: Protypes.string.isRequired,
    poster: Protypes.string.isRequired,
    genres: Protypes.arrayOf(Protypes.string).isRequired
}

export default Movie;