import { PlayIcon, StarIcon } from "@heroicons/react/24/solid";
import { Movie } from '../common/Interface/types';
import { imgUrl } from "../common/constants";
import { useRef } from 'react';
import TrailerModal from "./TrailerModal";


const PopularMovieCard = (movie: Movie) => {
    const { title, backdrop_path, vote_average, genreNames, id, overview, media_type } = movie;
    const myModal = useRef<HTMLDialogElement>(null)

    return (
        <div className="relative rounded-lg overflow-hidden md:mr-14 h-[170px]">
            <img src={`${imgUrl}${backdrop_path}`} alt={title} className="w-full h-full" />
            <div className="h-[54px] mx-auto my-auto absolute inset-x-0 bottom-0 flex flex-row items-center p-2 bg-[color:var(--fill)] rounded-b-lg backdrop-blur-[5px] backdrop-brightness-[100%]  shadow-[var(--blur)]">
                <div className="relative w-[28px] h-[28px] bg-[#c4c4c4] rounded-[14px]">
                    <button onClick={() => myModal.current?.showModal()} className="flex items-center justify-center w-[28px] h-[28px] bg-grey rounded-full">
                        <PlayIcon className="h-5 w-5 text-white"/>
                    </button>
                </div>
                <div className="flex flex-col ml-2">
                    <div className="text-white text-xs font-bold ">
                        {title}
                    </div>
                    <div className="text-zinc-400 text-xs font-normal hidden md:block">
                        {genreNames}
                    </div>
                </div>
                <div className="flex md:flex-col hidden md:block md:ml-[50%]">
                    <p className='my-auto'><StarIcon className="h-4 w-4 text-white"/></p>
                    <p className='my-auto ml-1 text-white'>{vote_average}</p>
                </div>
            </div>
            <div className="md:hidden px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-20 flex items-center gap-1 text-white text-xs">
                {vote_average?.toFixed(1)}
                <StarIcon className="h-4 w-4 text-white"/>
            </div>
            <TrailerModal modalRef={myModal} id={id} title={title} overview={overview} media_type={media_type}/>
        </div>
    );
}

export default PopularMovieCard;