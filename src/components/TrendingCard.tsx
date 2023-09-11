import { CalendarDaysIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Movie } from "../common/Interface/types";
import { imgUrl } from "../common/constants";
import { useRef } from 'react';
import TrailerModal from "./TrailerModal";


const TrendingCard = (trending: Movie) => {
    const { name, backdrop_path, origin_country, first_air_date, id, overview, media_type, title } = trending;
    const myModal = useRef<HTMLDialogElement>(null)

    return (
        <div className="relative rounded-lg overflow-hidden basis-1/2 mb-10 h-[170px] lg:h-[200px] lg:w-[280px]">
            <img src={`${imgUrl}${backdrop_path}`} alt={name} className="w-full h-full" />
            <div className="h-[54px] mx-auto my-auto absolute inset-x-0 bottom-0 flex flex-row items-center p-2 bg-[color:var(--fill)] rounded-b-lg backdrop-blur-[5px] backdrop-brightness-[100%]  shadow-[var(--blur)]">
                <div className="relative w-[28px] h-[28px] bg-[#c4c4c4] rounded-[14px]">
                    <button onClick={() => myModal.current?.showModal()} className="flex items-center justify-center w-[28px] h-[28px] bg-grey rounded-full">
                        <PlayIcon className="h-5 w-5 text-white" />
                    </button>
                </div>
                <div className="flex flex-col ml-2 mr-10">
                    <div className="text-white text-xs font-bold">
                        {name || title}
                    </div>
                    <div className="text-zinc-400 text-xs font-normal">
                        {origin_country}
                    </div>
                </div>
                <div className="w-11 h-5 px-2.5 py-0.5 bg-white rounded-2xl justify-center items-center">
                    <div className="text-black text-xs font-semibold">01:29</div>
                </div>
            </div>
            <TrailerModal modalRef={myModal} id={id} title={name} overview={overview} media_type={media_type} />
        </div>
    )
};

export default TrendingCard;