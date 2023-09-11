import { Genre, Movie } from "../common/Interface/types";
import { getPopularMovies, getRecomendedMovieGenres } from "../services/axios.service";
import { useState, useEffect, useRef } from 'react';
import GenresModal from "./GenresModal";

const RecomendedGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const myModal = useRef<HTMLDialogElement>(null)
    const [moviesContent, setMoviesContet] = useState<Movie[]>()
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genres = await getRecomendedMovieGenres();
                const movies = await getPopularMovies();
                setGenres(genres);
                setMoviesContet(movies);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const getGenreBackgroundColor = (genreName: string) => {
        switch (genreName) {
            case 'Action':
                return 'bg-red-400';
            case 'Comedy':
                return 'bg-orange-400';
            case 'Drama':
                return 'bg-blue-400';
            case 'Animation':
                return 'bg-green-400';
            default:
                return 'bg-gray';
        }
    };

    const filteredMovies = selectedGenre
        ? moviesContent?.filter((movie) => movie.genreNames.includes(selectedGenre))
        : null;

    return (
        <ul className="flex gap-3 flex-wrap justify-between">
            {genres && moviesContent && genres.slice(0, 7).map((genre, index) => (
                <>
                    <li key={index} className={`mb-1 text-white rounded-full border-solid p-2 ${getGenreBackgroundColor(genre?.name)}`}>
                        <button
                            onClick={() => {
                                setSelectedGenre(genre?.name);
                                myModal.current?.showModal();
                            }}
                        >
                            {genre?.name}
                        </button>
                    </li>
                    <GenresModal key={index} genreName={selectedGenre || ''} modalRef={myModal} moviesContent={filteredMovies || []} />
                </>
            ))}
        </ul>
    )
}

export default RecomendedGenres;