import { Link } from "react-router-dom";
import { Genre } from "../common/Interface/types";
import { getRecomendedMovieGenres } from "../services/axios.service";
import { useState, useEffect } from 'react';

const RecomendedGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genres = await getRecomendedMovieGenres();
                setGenres(genres);
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

    return (
        <ul className="flex gap-3 flex-wrap">
            {genres && genres.slice(0, 7).map((genre, index) => (
                <li key={index} className={`mb-1 text-white rounded-full border-solid p-2 ${getGenreBackgroundColor(genre?.name)}`}>
                    <Link to="/">{genre?.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default RecomendedGenres;