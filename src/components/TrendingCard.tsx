import { CalendarDaysIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Movie } from "../common/Interface/types";
import { imgUrl } from "../common/constants";


const TrendingCard = (trending: Movie) => {
    const { name, backdrop_path, origin_country, first_air_date } = trending;

    return (
        <div className="relative rounded-lg overflow-hidden basis-1/2 mb-10 h-[170px] lg:h-[200px] lg:w-[280px]">
            <img src={`${imgUrl}${backdrop_path}`} alt={name} className="w-full h-full" />
            <div className="h-[54px] mx-auto my-auto absolute inset-x-0 bottom-0 flex flex-row items-center p-2 justify-between bg-[color:var(--fill)] rounded-[10px_10px_20px_20px] backdrop-blur-[5px] backdrop-brightness-[100%]  shadow-[var(--blur)]">
                <div className="relative w-[28px] h-[28px] bg-[#c4c4c4] rounded-[14px]">
                    <button className="flex items-center justify-center w-[28px] h-[28px] bg-grey rounded-full">
                        <PlayIcon className="h-5 w-5 text-white" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="text-white text-xs font-bold">
                        {name}
                    </div>
                    <div className="text-zinc-400 text-xs font-normal">
                        {origin_country}
                    </div>
                </div>
                <div className="flex">
                    <p className='my-auto'><CalendarDaysIcon className="h-4 w-4 text-white" /></p>
                    <p className='my-auto ml-1 text-white text-xs'>{first_air_date}</p>
                </div>
            </div>
        </div>
    )
};

export default TrendingCard;