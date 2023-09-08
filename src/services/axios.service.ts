import axios from './axios.config';
import { MovieDetail, Movie, Genre } from '../common/Interface/types';
import { 
    POPULAR_MOVIES_API_URL,
    GENRE_MOVIES_API_URL,
    CONTINUE_WATCHING_API_URL,
    TOP_RATED_MOVIES_API_URL,
    TRENDING_ALL_API_URL
} from '../common/constants';

export const getPopularMovies = async (): Promise<MovieDetail[]> => {
    try {
        const moviesResponse = await axios.get(POPULAR_MOVIES_API_URL);
        const genresResponse = await axios.get(GENRE_MOVIES_API_URL);

        const movies = moviesResponse.data.results;
        const genres = genresResponse.data.genres;

        const moviesWithGenres = movies.map((movie: any) => {
            const genreIds = movie.genre_ids || [];

            const movieGenres = genreIds.map((genreId: any) => {
                const genre = genres.find((g: any) => g.id === genreId);
                return genre ? genre.name : "Desconocido";
            });

            return {
                ...movie,
                genreNames: movieGenres,
            };
        });

        return moviesWithGenres;
    } catch (error) {
        throw error;
    }
};

export const getContinueWatching = async (): Promise<MovieDetail[]> => {
    try {
        const response = await axios.get(CONTINUE_WATCHING_API_URL);
        const movies = response.data.results;

        return movies;
    } catch (error) {
        throw error;
    }
}

export const getTopRatedMovie = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(TOP_RATED_MOVIES_API_URL);
        const movies = response.data.results;

        return movies;
    } catch (error) {
        throw error;
    }
}

export const getTrendingNow = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(TRENDING_ALL_API_URL);
        const movies = response.data.results;

        return movies;
    } catch (error) {
        throw error;
    }
}

export const getRecomendedMovieGenres = async (): Promise<Genre[]> => {
    try {
        const movieGenres = await axios.get(GENRE_MOVIES_API_URL);

        return movieGenres.data.genres;
    } catch (error) {
        throw error;
    }
}