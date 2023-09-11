import { StarIcon } from "@heroicons/react/24/solid";
import { Animes } from "../common/Interface/types";


const AnimeCard = (anime: Animes) => {
    const {images, title, score} = anime;

    return (
        <div className="pb-2 rounded-lg overflow-hidden hover:scale-105 transition duration-300 relative group">
             <img src={`${images.jpg.image_url}`} alt={title} className="object-cover rounded-lg" />
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-white mt-1 text-center px-2 group-hover:text-white transition duration-300">
                {title}
            </p>
            <div className="px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-20 flex items-center gap-1 text-white text-xs">
                {score?.toFixed(1)}
                <StarIcon className="h-4 w-4 text-white"/>
            </div>
        </div>
    )
};

export default AnimeCard;