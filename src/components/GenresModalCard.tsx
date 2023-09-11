import React from "react";
import { Movie } from "../common/Interface/types";
import { imgUrl } from "../common/constants";
import { StarIcon } from "@heroicons/react/24/solid";

interface GenresModalCardProps {
    movie: Movie;
}

const GenresModalCard = ({ movie }: GenresModalCardProps) => {
    const { backdrop_path, title, vote_average } = movie;

    return (
        <div className="pb-2 rounded-lg overflow-hidden hover:scale-105 transition duration-300 relative group">
            <img src={`${imgUrl}${backdrop_path}`} alt={title} className="object-cover rounded-lg" />
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-white mt-1 text-center px-2 group-hover:text-white transition duration-300">
                {title}
            </p>
            <div className="px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-20 flex items-center gap-1 text-white text-xs">
                {vote_average?.toFixed(1)}
                <StarIcon className="h-4 w-4 text-white" />
            </div>
        </div>
    )
};

export default GenresModalCard;