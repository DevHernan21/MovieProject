import React, { useState, useEffect } from "react";
import PopularMovieCard from "../../components/PopularMovieCard";
import { getPopularMovies, getContinueWatching, getTopRatedMovie } from "../../services/axios.service";
import { Movie, MovieDetail } from "../../common/Interface/types";
import { Link } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider";
import ContinueWatchingCard from "../../components/ContinueWatchingCard";


const MoviesPage = () => {
    const [movies, setMovies] = useState<MovieDetail[]>([]);
    const [continueWatching, setContinueWatching] = useState<MovieDetail[]>([]);
    const [topRatedMovie, setTopRatedMovie] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const popularMovies = await getPopularMovies();
                const continueWatching = await getContinueWatching();
                const topRatedMovie = await getTopRatedMovie();
                setMovies(popularMovies);
                setContinueWatching(continueWatching);
                setTopRatedMovie(topRatedMovie);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col flex-1 ">
            <div className="flex ml-20">
                <BannerSlider bannerMovies={topRatedMovie} />
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row justify-between pt-10 ml-20 mr-20">
                    <div className="text-white text-lg font-bold">
                        Continue Watching
                    </div>
                    <div className="text-zinc-600 text-xs font-medium">
                        <Link to={`/`}>
                            All Movies {`>`}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row pt-10 ml-20">
                    {continueWatching && continueWatching.length > 0 && continueWatching.slice(0, 2).map((continueWatching, index) => (
                        <ContinueWatchingCard key={index} {...continueWatching} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row justify-between pt-10 ml-20 mr-20">
                    <div className="text-white text-lg font-bold">
                        Popular Movies 2023
                    </div>
                    <div className="text-zinc-600 text-xs font-medium">
                        <Link to={`/`}>
                            All Movies {`>`}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row pt-10 ml-20">
                    {movies && movies.length > 0 && movies.slice(0, 3).map((movie, index) => (
                        <PopularMovieCard key={index} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MoviesPage;