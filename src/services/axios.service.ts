import axios from './axios.config';
import { Movie, Genre, Animes, TV } from '../common/Interface/types';
import { 
    POPULAR_MOVIES_API_URL,
    GENRE_MOVIES_API_URL,
    CONTINUE_WATCHING_API_URL,
    TOP_RATED_MOVIES_API_URL,
    TRENDING_ALL_API_URL,
    ANIME_API_URL,
    TV_TRENDING_API_URL,
    TV_POPULAR_API_URL,
    TV_AIRING_TODAY_API_URL,
    TV_TOP_RATED_API_URL,
    MOVIE_VIDEO_TRAILER_APU_URL,
    YOUTUBE_TRAILER_URL,
    TV_VIDEO_TRAILER_API_URL,
    SEARCH_API_URL,
    TRENDING_ALL_WEEK_API_URL,
} from '../common/constants';

export const getPopularMovies = async (): Promise<Movie[]> => {
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
                media_type: 'movie'
            };
        });

        return moviesWithGenres;
    } catch (error) {
        throw error;
    }
};

export const getContinueWatching = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(CONTINUE_WATCHING_API_URL);
        const movies = response.data.results;

        const moviesWithMediaType = movies.map((movie: any) => ({
            ...movie,
            media_type: 'movie'
        }));

        return moviesWithMediaType;
    } catch (error) {
        throw error;
    }
}

export const getTopRatedMovie = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(TOP_RATED_MOVIES_API_URL);
        const movies = response.data.results;

        const moviesWithMediaType = movies.map((movie: any) => ({
            ...movie,
            media_type: 'movie'
        }));

        return moviesWithMediaType;
    } catch (error) {
        throw error;
    }
}

export const getTrendingNow = async (sortBy: string): Promise<Movie[]> => {
    try {
        let apiUrl;

        if (sortBy === 'week') {
            apiUrl = TRENDING_ALL_WEEK_API_URL;
        } else {
            apiUrl = TRENDING_ALL_API_URL;
        }

        const response = await axios.get(apiUrl);
        const trendingContent = response.data.results;

        return trendingContent;
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

export const getAnimes = async (): Promise<Animes[]> => {
    try {
        const animes = await axios.get(ANIME_API_URL);
        
        return animes.data.data;
    } catch (error) {
        throw error;
    }
}

export const getTrendingTv = async ():Promise<TV[]> => {
    try {
        const tv = await axios.get(TV_TRENDING_API_URL);
        const tvData = tv.data.results;

        const tvWithMediaTypes = tvData.map((tv: any) => ({
            ...tv,
            media_type: 'tv'
        }));

        return tvWithMediaTypes;
    } catch (error) {
        throw error;
    }
};

export const getPopularTv = async ():Promise<TV[]> => {
    try {
        const tv = await axios.get(TV_POPULAR_API_URL);
        const tvData = tv.data.results;

        const tvWithMediaTypes = tvData.map((tv: any) => ({
            ...tv,
            media_type: 'tv'
        }));

        return tvWithMediaTypes;
    } catch (error) {
        throw error;
    }
}

export const getAiringTv = async ():Promise<TV[]> => {
    try {
        const tv = await axios.get(TV_AIRING_TODAY_API_URL);
        const tvData = tv.data.results;

        const tvWithMediaTypes = tvData.map((tv: any) => ({
            ...tv,
            media_type: 'tv'
        }));

        return tvWithMediaTypes;
    } catch (error) {
        throw error;
    }
}

export const getTopRatedTv = async ():Promise<TV[]> => {
    try {
        const tv = await axios.get(TV_TOP_RATED_API_URL);
        const tvData = tv.data.results;

        const tvWithMediaTypes = tvData.map((tv: any) => ({
            ...tv,
            media_type: 'tv'
        }));

        return tvWithMediaTypes;
    } catch (error) {
        throw error;
    }
}

export const getTrailer = async (id: number, media_type: string | undefined): Promise<string> => {
    try {   
        let youtubeMovieTrailer = '';
        let youtubeTvTrailer = '';

        if (media_type === 'movie') {
            const response = await axios.get(MOVIE_VIDEO_TRAILER_APU_URL.replace('{movie_id}', id.toString()));
            const trailer = response.data.results[0];
    
            youtubeTvTrailer = YOUTUBE_TRAILER_URL.replace('{key}', trailer.key);
        } else if (media_type === 'tv') {
            const response = await axios.get(TV_VIDEO_TRAILER_API_URL.replace('{trailer_id}', id.toString()));
            const trailer = response.data.results[0];
    
            youtubeMovieTrailer =  YOUTUBE_TRAILER_URL.replace('{key}', trailer.key);
        }

        return youtubeMovieTrailer || youtubeTvTrailer;
    } catch (error) {
        throw error;
    }
}

export const getSearchResults = async (query: string): Promise<Movie[]> => {
    try {
        const response = await axios.get(SEARCH_API_URL, {
            params: {
                query
            }
        });
        const searchResults = response.data.results;

        return searchResults;
    } catch (error) {
        throw error;
    }
}