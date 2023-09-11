import React, { useState, useEffect } from "react";
import PopularMovieCard from "../../components/PopularMovieCard";
import { getPopularMovies, getContinueWatching, getTopRatedMovie } from "../../services/axios.service";
import { Movie } from "../../common/Interface/types";
import { Link } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider";
import ContinueWatchingCard from "../../components/ContinueWatchingCard";


const MoviesPage = () => {
    const [moviesData, setMoviesData] = useState<Movie[]>([]);
    const [continueWatchingData, setContinueWatchingData] = useState<Movie[]>([]);
    const [topRatedMovieData, setTopRatedMovieData] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const popularMovies = await getPopularMovies();
                const continueWatching = await getTopRatedMovie();
                const topRatedMovie = await getTopRatedMovie();
                setMoviesData(popularMovies);
                setContinueWatchingData(continueWatching);
                setTopRatedMovieData(topRatedMovie);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col flex-1 ">
            <div className="flex md:ml-20">
                <BannerSlider bannerMovies={topRatedMovieData} />
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row justify-between pt-10 ml-20 mr-20 items-center">
                    <div className="text-white text-lg font-bold">
                        Continue Watching
                    </div>
                    <div className="text-zinc-600 text-xs font-medium">
                        <Link to={`/`}>
                            All Movies {`>`}
                        </Link>
                    </div>
                </div>

                <div className="grid gap-x-8 pt-10 grid-cols-2 lg:grid-cols-lg md:ml-20">
                    {continueWatchingData && continueWatchingData.length > 0 && continueWatchingData.slice(0, 2).map((continueWatching, index) => (
                        <ContinueWatchingCard key={index} {...continueWatching} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row justify-between pt-10 ml-20 mr-20 items-center">
                    <div className="text-white text-lg font-bold">
                        Popular Movies 2023
                    </div>
                    <div className="text-zinc-600 text-xs font-medium">
                        <Link to={`/`}>
                            All Movies {`>`}
                        </Link>
                    </div>
                </div>
                <div className="grid gap-x-8 gap-y-8 pt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-lg md:ml-20">
                    {moviesData && moviesData.length > 0 && moviesData.slice(0, 3).map((movie, index) => (
                        <PopularMovieCard key={index} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MoviesPage;