import { CalendarDaysIcon, PlayIcon } from "@heroicons/react/24/solid"
import { Movie } from "../common/Interface/types"
import { imgUrl } from "../common/constants";
import { useRef, useState } from "react";
import TrailerModal from "./TrailerModal";
import { useCurrentViewPort } from "../hooks/useCurrentViewPort";


const ContinueWatchingCard = (actualMovie: Movie) => {
    const { title, backdrop_path, release_date, original_language, overview, id, media_type, origin_country } = actualMovie;
    const [isHovered, setIsHovered] = useState(false);
    const myModal = useRef<HTMLDialogElement>(null)
    const { isMobile } = useCurrentViewPort();

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-lg overflow-hidden md:mr-14 group"
        >
            <img src={`${imgUrl}${backdrop_path}`} alt={title} className="w-full h-full group-hover:opacity-30" />
            <div className={`${isHovered ? 'opacity-0' : 'opacity-100'} h-[54px] mx-auto my-auto absolute inset-x-0 bottom-0 flex flex-row items-center p-2 bg-[color:var(--fill)] rounded-b-lg backdrop-blur-[5px] backdrop-brightness-[100%]  shadow-[var(--blur)]`}>
                <div className="flex flex-row basis-1/4 items-center">
                    <div className="relative w-[28px] h-[28px] bg-[#c4c4c4] rounded-[14px]">
                        <button onClick={() => myModal.current?.showModal()} className="flex items-center justify-center w-[28px] h-[28px] bg-grey rounded-full">
                            <PlayIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                    <div className="flex flex-col ml-2">
                        <div className="text-white text-xs font-bold">
                            {title}
                        </div>
                        <div className="text-zinc-400 text-xs font-normal hidden md:block">
                            {original_language}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row basis-1/2 hidden md:block ml-20">
                    <div className="text-zinc-400 text-xs font-normal">32:47</div>
                    <div className="w-20 h-1.5 relative">
                        <div className="w-20 h-0.5 left-0 top-[1.57px] absolute bg-stone-300 rounded-lg" />
                        <div className="w-6 h-0.5 left-[14px] top-[1.57px] absolute bg-white rounded-lg" />
                        <div className="w-5 h-0.5 left-0 top-[1.57px] absolute bg-violet-500 rounded-lg" />
                        <div className="w-1.5 h-1.5 left-[17.65px] top-0 absolute bg-white rounded-full" />
                    </div>
                    <div className="text-zinc-400 text-xs font-normal">02:34:28</div>
                </div>
                <div className="flex flex-row hidden md:block basis-1/4 ">
                    <p className='basis-1/2 ml-1 text-white'> {release_date} <CalendarDaysIcon className="h-4 w-4 text-white" /></p>
                </div>
            </div>

            <div className={`absolute pr-6 pl-6 inset-0 flex items-center justify-center mt-4 transition-all transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hidden md:block`}>
                <div className="p-2">
                    <h1 className="text-white text-sm font-bold">{title}</h1>
                    <p className="text-stone-300 text-xs font-normal pt-2.5">Country: {origin_country}</p>
                    <p className="text-white text-xs font-normal leading-tight pt-2.5">{overview}</p>
                </div>
            </div>
            {isMobile && (
                <TrailerModal modalRef={myModal} id={id} title={title} overview={overview} media_type={media_type} />
            )}
        </div>
    )
}

export default ContinueWatchingCard